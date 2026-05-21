import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import userImage from "../../../public/assets/images/auser.jpg";

function Instructions() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const testId = searchParams.get("testId");
  const { student } = useAuth();
  const [accepted, setAccepted] = useState(false);
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace(
    "public",
    "student",
  );

  useEffect(() => {
    const fetchTestDetails = async () => {
      if (!testId) {
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("studentToken");
        const response = await axios.get(`${STUDENT_URL}tests/${testId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.success) {
          setTestData(response.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch test details", err);
        setError("Failed to load test details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, [testId, STUDENT_URL]);

  const handleStart = async () => {
    if (!accepted) return;

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("studentToken");
      const response = await axios.post(
        `${STUDENT_URL}attempts/${testId}/start`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (response.data.success) {
        const attemptId = response.data.data.id;
        localStorage.setItem("attemptId", attemptId);
        navigate(`/question?testId=${testId}`);
      }
    } catch (err) {
      console.error("Error starting test:", err);
      setError(
        err.response?.data?.message ||
          "Failed to start test. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-5 text-center">Loading test details...</div>;
  }

  if (!testData) {
    return (
      <div className="p-5 text-center text-danger">
        {error || "Test not found."}
      </div>
    );
  }

  const { test, studentStatus } = testData;

  return (
    <section className="test-wrapper">
      <div className="test-container">
        <div className="user-panel">
          <div className="user-card">
            <div className="d-flex align-items-center">
              <div className="img-user">
                <img
                  src={student?.avatar || userImage}
                  className="user-img"
                  alt="user"
                />
              </div>
              <div className="user-data ms-3">
                <h4 className="user-name mb-0">{student?.name || "Student"}</h4>
                <p className="user-email text-muted small mb-0">
                  {student?.email}
                </p>
              </div>
            </div>
            <hr />
            <div className=" mt-4">
              <h5 className="overview-title">Test Overview</h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="overview-item overview-primary">
                    <span className="overview-label">Test Name</span>
                    <h6>{test.title}</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="overview-item overview-orange">
                    <span className="overview-label">Duration</span>
                    <h6>{test.duration} mins</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="overview-item overview-info">
                    <span className="overview-label">Total Questions</span>
                    <h6>{test.totalQuestions}</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="overview-item overview-success">
                    <span className="overview-label">Passing Score</span>
                    <h6>{test.passingScore}%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="instruction-panel">
          <div className="instruction-card">
            <h2 className="inst-title">INSTRUCTIONS & TERMS</h2>
            <p className="inst-subtitle">
              Please read the following instructions and terms carefully.
            </p>
            <div className="exam-instruction-wrapper">
              <div className="instruction-top">
                <h4>Important Instructions</h4>
                <p>
                  Please read the following instructions carefully before
                  starting the examination.
                </p>
              </div>

              {/* Instructions */}
              <div className="instruction-block">
                <h5>Test Instructions</h5>

                <div
                  className="instruction-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      test.instructions ||
                      `
          <ul>
            <li>The test contains ${test.totalQuestions} multiple choice questions.</li>
            <li>The duration of the test is ${test.duration} minutes.</li>
            <li>Please ensure stable internet connectivity during the examination.</li>
            <li>Do not refresh or close the browser during the test.</li>
          </ul>
          `,
                  }}
                />
              </div>

              {/* Terms */}
              {test.termsConditions && (
                <div className="instruction-block">
                  <h5>Terms & Conditions</h5>

                  <div
                    className="instruction-text"
                    dangerouslySetInnerHTML={{
                      __html: test.termsConditions,
                    }}
                  />
                </div>
              )}

              {/* Languages */}
              <div className="instruction-block">
                <h5>Available Languages</h5>

                <div className="language-tags">
                  {test.availableLanguages?.length > 0 ? (
                    test.availableLanguages.map((lang, index) => (
                      <span key={index} className="lang-badge">
                        {lang.name}
                      </span>
                    ))
                  ) : (
                    <span className="lang-badge">Default</span>
                  )}
                </div>
              </div>

              {/* Rules */}
              <div className="exam-guidelines">
                <h5>Examination Guidelines</h5>

                <ul>
                  <li>
                    Duration of examination:{" "}
                    <strong>{test.duration} Minutes</strong>
                  </li>

                  <li>
                    Total Questions: <strong>{test.totalQuestions}</strong>
                  </li>

                  <li>
                    Negative Marking:
                    <strong>
                      {test.negativeMarking
                        ? ` Yes (${test.negativeMarkValue})`
                        : " No"}
                    </strong>
                  </li>

                  <li>
                    Auto Submit:
                    <strong> {test.autoSubmit ? "Enabled" : "Disabled"}</strong>
                  </li>

                  <li>
                    Candidates are advised not to switch tabs or minimize the
                    browser window during the test.
                  </li>

                  <li>
                    The examination will automatically end once the allotted
                    time is completed.
                  </li>
                </ul>
              </div>
            </div>

            <div className="inst-action">
              {studentStatus.canAttempt ? (
                <>
                  <label className="checkbox-wrap d-flex align-items-center">
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span className="checkbox-text ms-2">
                      I have read and understood all instructions and terms.
                    </span>
                  </label>

                  {error && <p className="text-danger mt-2">{error}</p>}

                  <div className="d-flex gap-3 mt-3 justify-content-between">
                    <button
                      className="exam-back-btn"
                      onClick={() => navigate(`/`)}
                    >
                      <i className="fa-light fa-arrow-left"></i>
                      Back 
                    </button>
                    <button
                      className="start-btn flex-grow-1 rts-btn btn-primary"
                      disabled={!accepted || loading}
                      onClick={handleStart}
                    >
                      {loading ? "Starting..." : "Start Test →"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="alert alert-warning mt-3">
                  You have already reached the maximum allowed attempts (
                  {test.allowedAttempts}) or cannot attempt this test at this
                  time.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
