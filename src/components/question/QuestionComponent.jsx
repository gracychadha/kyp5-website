import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import userImage from "../../../public/assets/images/auser.jpg";

const QuestionComponent = () => {
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");
  const navigate = useNavigate();
  const { student, logout } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [testData, setTestData] = useState(null);
  const [answers, setAnswers] = useState({}); // { questionId: { selectedOptionId, isMarkedForReview } }
  const [language, setLanguage] = useState("en");
  const [showResultModal, setShowResultModal] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [showConfirmSubmitModal, setShowConfirmSubmitModal] = useState(false);

  const attemptId = localStorage.getItem("attemptId");
  const studentToken = localStorage.getItem("studentToken");
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:7777/api";
  const STUDENT_URL = baseUrl.replace("public", "student");

  const autoSaveTimerRef = useRef(null);

  const triggerAutoSave = (questionId, updatedAnswer) => {
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);

    autoSaveTimerRef.current = setTimeout(async () => {
      try {
        const payload = {
          questionId,
          selectedOptionId: updatedAnswer.selectedOptionId || null,
          selectedOptionIds: updatedAnswer.selectedOptionIds || [],
          isMarkedForReview: updatedAnswer.isMarkedForReview || false,
          timeTakenSeconds: 0,
        };

        await axios.post(`${STUDENT_URL}attempts/${attemptId}/save`, payload, {
          headers: { Authorization: `Bearer ${studentToken}` },
        });
      } catch (error) {
        console.error("Auto-save failed:", error);
      }
    }, 1000);
  };

  const fetchAttemptData = useCallback(async () => {
    if (!attemptId || !studentToken) {
      toast.error("Invalid session. Please start the test again.");
      navigate(`/test/${testId}`);
      return;
    }

    try {
      const response = await axios.get(
        `${STUDENT_URL}attempts/${attemptId}/questions`,
        {
          headers: { Authorization: `Bearer ${studentToken}` },
        },
      );

      if (response.data.success) {
        const {
          questions: qData,
          test: tData,
          userAnswers,
        } = response.data.data;
        setQuestions(qData);
        setTestData(tData);
        setLanguage(tData.selectedLanguage || "en");

        // Calculate remaining time
        const expiresAt = new Date(tData.expiresAt).getTime();
        const now = new Date().getTime();
        const remaining = Math.max(0, Math.floor((expiresAt - now) / 1000));
        setTimeLeft(remaining);

        // Map existing answers
        const initialAnswers = {};
        userAnswers.forEach((ans) => {
          initialAnswers[ans.questionId] = {
            selectedOptionId: ans.selectedOptionId,
            selectedOptionIds: ans.selectedOptionIds || [],
            isMarkedForReview: ans.isMarkedForReview,
          };
        });
        setAnswers(initialAnswers);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      toast.error("Failed to load questions");
    } finally {
      setLoading(false);
    }
  }, [attemptId, studentToken, STUDENT_URL, navigate, testId]);

  useEffect(() => {
    fetchAttemptData();
  }, [fetchAttemptData]);

  // Track visited status
  useEffect(() => {
    if (questions.length > 0 && questions[currentIndex]) {
      const qId = questions[currentIndex].id;
      if (!answers[qId]) {
        setAnswers((prev) => ({
          ...prev,
          [qId]: {
            selectedOptionId: null,
            selectedOptionIds: [],
            isMarkedForReview: false,
          },
        }));
      }
    }
  }, [currentIndex, questions]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0 && !loading) {
      if (timeLeft === 0) handleAutoSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, loading]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ":" : ""}${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleAutoSubmit = () => {
    toast.error("Time is up! Submitting your test.");
    handleSubmitTest();
  };

  const handleSaveAnswer = async (isMarked = false) => {
    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentQuestion.id];

    try {
      const payload = {
        questionId: currentQuestion.id,
        selectedOptionId: currentAnswer?.selectedOptionId || null,
        selectedOptionIds: currentAnswer?.selectedOptionIds || [],
        isMarkedForReview: isMarked,
        timeTakenSeconds: 0,
      };

      await axios.post(`${STUDENT_URL}attempts/${attemptId}/save`, payload, {
        headers: { Authorization: `Bearer ${studentToken}` },
      });

      // Update local state for marked status
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...prev[currentQuestion.id],
          isMarkedForReview: isMarked,
        },
      }));

      handleNext();
    } catch (error) {
      toast.error("Failed to save answer");
    }
  };

  const handleClearResponse = async () => {
    const currentQuestion = questions[currentIndex];
    const updatedAns = {
      selectedOptionId: null,
      selectedOptionIds: [],
      isMarkedForReview: false,
    };

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: updatedAns,
    }));

    try {
      await axios.post(
        `${STUDENT_URL}attempts/${attemptId}/save`,
        {
          questionId: currentQuestion.id,
          ...updatedAns,
          timeTakenSeconds: 0,
        },
        {
          headers: { Authorization: `Bearer ${studentToken}` },
        },
      );
      toast.success("Response cleared");
    } catch (error) {
      toast.error("Failed to clear response");
    }
  };

  const handleLanguageChange = async (newLang) => {
    try {
      await axios.patch(
        `${STUDENT_URL}attempts/${attemptId}/language`,
        { languageCode: newLang },
        { headers: { Authorization: `Bearer ${studentToken}` } },
      );
      setLanguage(newLang);
      fetchAttemptData(); // Re-fetch to get translated questions
      toast.success(
        `Language changed to ${newLang === "en" ? "English" : "Hindi"}`,
      );
    } catch (error) {
      toast.error("Failed to change language");
    }
  };

  const handleSubmitTest = async () => {
    setShowConfirmSubmitModal(false);

    try {
      setLoading(true);
      const response = await axios.post(
        `${STUDENT_URL}attempts/${attemptId}/submit`,
        {},
        {
          headers: { Authorization: `Bearer ${studentToken}` },
        },
      );

      if (response.data.success) {
        setTestResult(response.data.data);
        setShowResultModal(true);
        toast.success(response.data.message || "Test submitted successfully!");
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Extract error message properly
      let errorMessage = "Failed to submit test";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onOptionSelect = (optionId) => {
    const currentQuestion = questions[currentIndex];
    setAnswers((prev) => {
      const existing = prev[currentQuestion.id] || {
        selectedOptionId: null,
        selectedOptionIds: [],
        isMarkedForReview: false,
      };

      let updatedAns;
      if (currentQuestion.type === "MULTI_SELECT") {
        const newIds = existing.selectedOptionIds.includes(optionId)
          ? existing.selectedOptionIds.filter((id) => id !== optionId)
          : [...existing.selectedOptionIds, optionId];

        updatedAns = {
          ...existing,
          selectedOptionIds: newIds,
        };
      } else {
        updatedAns = {
          ...existing,
          selectedOptionId: optionId,
        };
      }

      triggerAutoSave(currentQuestion.id, updatedAns);
      return {
        ...prev,
        [currentQuestion.id]: updatedAns,
      };
    });
  };

  if (loading) {
    return <div className="loading-screen">Loading Test...</div>;
  }

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion?.id] || {};

  // Status Counts
  const isAnswered = (ans) => {
    if (ans.selectedOptionId) return true;
    if (ans.selectedOptionIds && ans.selectedOptionIds.length > 0) return true;
    return false;
  };

  const attemptedCount = Object.values(answers).filter(
    (a) => isAnswered(a) && !a.isMarkedForReview,
  ).length;
  const markedCount = Object.values(answers).filter(
    (a) => a.isMarkedForReview && !isAnswered(a),
  ).length;
  const markedAnsweredCount = Object.values(answers).filter(
    (a) => a.isMarkedForReview && isAnswered(a),
  ).length;
  const notVisitedCount = questions.length - Object.keys(answers).length;
  const notAnsweredCount = Object.values(answers).filter(
    (a) => !isAnswered(a) && !a.isMarkedForReview,
  ).length;

  return (
    <>
      <section className="test-wrapper">
        <div className="test-container ">
          <div className="user-panel">
            <div className="user-card">
              <div className="d-flex align-items-center gap-3">
                <div className="img-user">
                  <img src={userImage} className="user-img" alt="User" />
                </div>
                <div className="user-data">
                  <h4 className="user-name mb-0">
                    {student?.name || "Student"}
                  </h4>
                  <p className="user-email mb-0 text-muted small">
                    {student?.email}
                  </p>
                  {/*                  
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to leave the test? Your progress might not be saved.",
                        )
                      ) {
                        navigate(`/instruction?testId=${testId}`);
                      }
                    }}
                    className="btn btn-link p-0 text-secondary text-decoration-none small d-block"
                    style={{ fontSize: "12px" }}
                  >
                    <i className="fa-light fa-arrow-left me-1"></i> Back to
                    Instructions
                  </button> */}
                </div>
              </div>

              <div className="qp-legend-wrapper mt-4">
                <div className="qp-legend-item">
                  <span className="qp-box qp-attempted">{attemptedCount}</span>
                  <p className="qp-label">Answered</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-marked">{markedCount}</span>
                  <p className="qp-label">Marked</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-not-visited">
                    {notVisitedCount}
                  </span>
                  <p className="qp-label">Not Visited</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-not-answered">
                    {notAnsweredCount}
                  </span>
                  <p className="qp-label">Not Answered</p>
                </div>

                <div className="qp-legend-item w-100">
                  <span className="qp-box qp-marked-answered">
                    {markedAnsweredCount}{" "}
                    <i className="fa-solid fa-check text-white"></i>
                  </span>
                  <p className="qp-label">Marked & Answered</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-data px-3">
              <h5 className="question-palette__title">
                <strong>Test:</strong> {testData?.title}
              </h5>
            </div>
            <div className="user-card">
              <div className="question-palette">
                <div className="question-palette__grid scrollable-grid">
                  {questions.map((q, index) => {
                    const ans = answers[q.id];
                    const isActive = index === currentIndex;
                    let statusClass = "";

                    if (ans?.isMarkedForReview && isAnswered(ans))
                      statusClass = "qp-marked-answered";
                    else if (ans?.isMarkedForReview) statusClass = "qp-marked";
                    else if (ans && isAnswered(ans))
                      statusClass = "qp-attempted";
                    else if (ans) statusClass = "qp-not-answered";
                    else statusClass = "qp-not-visited";

                    return (
                      <div
                        key={q.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`question-palette__item ${statusClass} ${isActive ? "question-palette__item--active" : ""}`}
                      >
                        {index + 1}
                        {statusClass === "qp-marked-answered" && (
                          <i className="fa-solid fa-check"></i>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => setShowConfirmSubmitModal(true)}
                className="rts-btn btn-primary mt-4 w-100"
              >
                Submit Test
              </button>
            </div>
          </div>

          <div className="question-main-container">
            <div className="title-section d-flex justify-content-between align-items-center">
              <h6 className="title mb-0">
                <strong>Section:</strong>{" "}
                {currentQuestion?.section?.name || "General Awareness"}
              </h6>
              <div className="lang-switcher d-flex align-items-center gap-2">
                <span className="small fw-bold">Language:</span>
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="form-select form-select-sm"
                  style={{ width: "100px" }}
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>
            <div className="main-container-q">
              <div className="q-header d-flex justify-content-between align-items-center mb-4">
                <h5 className="title mb-0 ">Question {currentIndex + 1}:</h5>
                <div className="timer-box d-flex align-items-center gap-2">
                  <i className="fa-regular fa-clock text-danger"></i>
                  <span className="timer fw-bold text-dark">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>

              <div className="q-main-section">
                <div className="question-card border-0    bg-white">
                  <h5 className="question-text mb-4 lh-base">
                    {currentQuestion?.text}
                  </h5>

                  {currentQuestion?.imageUrl && (
                    <div className="question-image mb-4">
                      <img
                        src={currentQuestion?.imageUrl}
                        alt="Question"
                        className="img-fluid rounded"
                      />
                    </div>
                  )}

                  <div className="options-container d-flex flex-column gap-3">
                    {currentQuestion?.options?.map((option) => {
                      const isSelected =
                        currentQuestion.type === "MULTI_SELECT"
                          ? currentAnswer.selectedOptionIds?.includes(option.id)
                          : currentAnswer.selectedOptionId === option.id;

                      return (
                        <label
                          key={option.id}
                          className={`option-box p-3 rounded-3 border ${isSelected ? "border-primary bg-light" : ""}`}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <input
                              type={
                                currentQuestion.type === "MULTI_SELECT"
                                  ? "checkbox"
                                  : "radio"
                              }
                              name={`q-${currentQuestion.id}`}
                              checked={isSelected}
                              onChange={() => onOptionSelect(option.id)}
                              className="form-check-input mt-0"
                            />
                            <div className="option-content-wrapper d-flex flex-column gap-2">
                              <span className="option-text">{option.text}</span>
                              {option.imageUrl && (
                                <img
                                  src={option.imageUrl}
                                  alt="Option"
                                  className="option-image img-fluid rounded"
                                  style={{
                                    maxHeight: "150px",
                                    objectFit: "contain",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="q-button-container d-flex justify-content-between mt-5">
                <div className="left-btns d-flex gap-3">
                  <button
                    onClick={() => handleSaveAnswer(true)}
                    className="review-next-btn"
                  >
                    <i className="fa-light fa-bookmark"></i>
                    Mark for Review & Next
                  </button>
                  <button
                    onClick={handleClearResponse}
                    className="clear-response-btn"
                  >
                    <i className="fa-light fa-eraser"></i>
                    Clear Response
                  </button>
                </div>

                <div className="right-btn d-flex gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="rts-btn btn-secondary px-4 text-white"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handleSaveAnswer(false)}
                    className="rts-btn btn-primary px-4"
                  >
                    Save & Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Modal */}
      {showResultModal && testResult && (
        <div
          className="modal-overlay d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            className="result-modal-content bg-white rounded-5 shadow-lg p-5 text-center animate__animated animate__zoomIn"
            style={{
              maxWidth: "500px",
              width: "90%",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="success-icon mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-sm"
                style={{ width: "80px", height: "80px", fontSize: "40px" }}
              >
                <i className="fa-solid fa-check"></i>
              </div>
            </div>

            <h2 className="fw-bold mb-2">Test Submitted!</h2>
            <p className="text-muted mb-4">{testResult.submissionMessage}</p>

            {testResult.showResult ? (
              <div className="result-stats-container">
                <div className="score-display mb-4 p-4 rounded-4 bg-light">
                  <h1 className="display-4 fw-bold text-primary mb-0">
                    {testResult.result?.score}
                  </h1>
                  <p className="text-muted fw-bold mb-0">Total Score</p>
                  <div className="mt-2 badge rounded-pill bg-primary px-3 py-2">
                    {testResult.result?.percentage}% Accuracy
                  </div>
                </div>

                <div
                  className="stats-grid d-grid gap-3"
                  style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
                >
                  <div className="stat-item p-3 rounded-4 border bg-white">
                    <h5 className="mb-0 text-success fw-bold">
                      {testResult.result?.correctCount}
                    </h5>
                    <small className="text-muted">Correct</small>
                  </div>
                  <div className="stat-item p-3 rounded-4 border bg-white">
                    <h5 className="mb-0 text-danger fw-bold">
                      {testResult.result?.wrongCount}
                    </h5>
                    <small className="text-muted">Wrong</small>
                  </div>
                  <div className="stat-item p-3 rounded-4 border bg-white">
                    <h5 className="mb-0 text-secondary fw-bold">
                      {testResult.result?.skippedCount}
                    </h5>
                    <small className="text-muted">Skipped</small>
                  </div>
                </div>

                <div
                  className={`mt-4 py-3 rounded-4 fw-bold ${testResult.result?.isPassed ? "text-success bg-success-subtle" : "text-danger bg-danger-subtle"}`}
                  style={{
                    backgroundColor: testResult.result?.isPassed
                      ? "rgba(25, 135, 84, 0.1)"
                      : "rgba(220, 53, 69, 0.1)",
                  }}
                >
                  {testResult.result?.isPassed
                    ? "🎉 YOU PASSED"
                    : "❌ NEEDS IMPROVEMENT"}
                </div>
              </div>
            ) : (
              <div className="no-result-message p-4 rounded-4 bg-light text-muted">
                Result will be declared soon after review.
              </div>
            )}

            <button
              onClick={() => {
                localStorage.removeItem("attemptId");
                navigate("/dashboard");
              }}
              className="rts-btn btn-primary w-100 mt-5 py-3 rounded-4 shadow-sm fw-bold"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showConfirmSubmitModal && (
        <div
          className="modal-overlay d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            className="submit-modal-content bg-white rounded-5 shadow-lg p-5 text-center animate__animated animate__zoomIn"
            style={{
              maxWidth: "550px",
              width: "90%",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="warning-icon mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-warning text-white rounded-circle shadow-sm animate__animated animate__pulse animate__infinite"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "40px",
                  backgroundColor: "#ff9800",
                }}
              >
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
            </div>

            <h2 className="fw-bold mb-2 text-dark">Submit Your Test?</h2>
            <p className="text-muted mb-4">
              You are about to submit your test. Please review your attempt
              summary below. Once submitted, you cannot modify your answers.
            </p>

            <div className="progress-summary mb-4 p-4 rounded-4 bg-light text-start">
              <h5 className="fw-bold text-dark mb-3 border-bottom pb-2">
                <i className="fa-solid fa-list-check me-2 text-primary"></i>{" "}
                Attempt Summary
              </h5>
              <div
                className="stats-grid d-grid gap-3"
                style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                <div className="stat-item p-3 rounded-4 border bg-white d-flex align-items-center gap-3">
                  <span
                    className="qp-box qp-attempted d-flex align-items-center justify-content-center m-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                    }}
                  >
                    {attemptedCount}
                  </span>
                  <div>
                    <h6 className="mb-0 fw-bold">{attemptedCount}</h6>
                    <small className="text-muted">Answered</small>
                  </div>
                </div>

                <div className="stat-item p-3 rounded-4 border bg-white d-flex align-items-center gap-3">
                  <span
                    className="qp-box qp-marked d-flex align-items-center justify-content-center m-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                    }}
                  >
                    {markedCount}
                  </span>
                  <div>
                    <h6 className="mb-0 fw-bold">{markedCount}</h6>
                    <small className="text-muted">Marked for Review</small>
                  </div>
                </div>

                <div className="stat-item p-3 rounded-4 border bg-white d-flex align-items-center gap-3">
                  <span
                    className="qp-box qp-marked-answered d-flex align-items-center justify-content-center m-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                    }}
                  >
                    {markedAnsweredCount}
                  </span>
                  <div>
                    <h6 className="mb-0 fw-bold">{markedAnsweredCount}</h6>
                    <small className="text-muted">Marked & Answered</small>
                  </div>
                </div>

                <div className="stat-item p-3 rounded-4 border bg-white d-flex align-items-center gap-3">
                  <span
                    className="qp-box qp-not-answered d-flex align-items-center justify-content-center m-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                    }}
                  >
                    {notAnsweredCount}
                  </span>
                  <div>
                    <h6 className="mb-0 fw-bold">{notAnsweredCount}</h6>
                    <small className="text-muted">Not Answered</small>
                  </div>
                </div>

                <div
                  className="stat-item p-3 rounded-4 border bg-white d-flex align-items-center gap-3"
                  style={{ gridColumn: "span 2" }}
                >
                  <span
                    className="qp-box qp-not-visited d-flex align-items-center justify-content-center m-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                    }}
                  >
                    {notVisitedCount}
                  </span>
                  <div>
                    <h6 className="mb-0 fw-bold">{notVisitedCount}</h6>
                    <small className="text-muted">
                      Not Visited (Out of {questions.length} total questions)
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-between">
              <button
                onClick={() => setShowConfirmSubmitModal(false)}
                className="rts-btn btn-secondary w-50 py-3 rounded-4 shadow-sm fw-bold border-0"
                style={{ backgroundColor: "#e4e6eb", color: "#4b4f56" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitTest}
                className="rts-btn btn-primary w-50 py-3 rounded-4 shadow-sm fw-bold border-0"
                style={{ backgroundColor: "#0d6efd", color: "#fff" }}
              >
                Yes, Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionComponent;
