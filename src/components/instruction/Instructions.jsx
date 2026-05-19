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

  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace("public", "student");

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
        }
      );

      if (response.data.success) {
        const attemptId = response.data.data.id;
        localStorage.setItem("attemptId", attemptId);
        navigate(`/question?testId=${testId}`);
      }
    } catch (err) {
      console.error("Error starting test:", err);
      setError(err.response?.data?.message || "Failed to start test. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-5 text-center">Loading test details...</div>;
  }

  if (!testData) {
    return <div className="p-5 text-center text-danger">{error || "Test not found."}</div>;
  }

  const { test, studentStatus } = testData;

  return (
    <section className="test-wrapper">
      <div className="test-container">
        <div className="user-panel">
          <div className="user-card">
            <div className="d-flex align-items-center">
              <div className="img-user">
                <img src={student?.avatar || userImage} className="user-img" alt="user" />
              </div>
              <div className="user-data ms-3">
                <h4 className="user-name mb-0">{student?.name || "Student"}</h4>
                <p className="user-email text-muted small mb-0">{student?.email}</p>
                <button 
                  onClick={() => {
                    if (window.confirm("Are you sure you want to logout?")) {
                      logout();
                      navigate("/");
                    }
                  }}
                  className="btn btn-link p-0 text-danger text-decoration-none small mt-1"
                  style={{ fontSize: "12px" }}
                >
                  <i className="fa-light fa-right-from-bracket me-1"></i> Logout
                </button>
              </div>
            </div>
            <hr />
            <div className="user-details mt-3">
              <p className="mb-2">
                <strong>Test:</strong> {test.title}
              </p>
              <p className="mb-2">
                <strong>Duration:</strong> {test.duration} mins
              </p>
              <p className="mb-2">
                <strong>Total Questions:</strong> {test.totalQuestions}
              </p>
              <p className="mb-0">
                <strong>Passing Score:</strong> {test.passingScore}%
              </p>
            </div>
          </div>
        </div>
        
        <div className="instruction-panel">
          <div className="instruction-card">
            <h2 className="inst-title">INSTRUCTIONS & TERMS</h2>
            <p className="inst-subtitle">
              Please read the following instructions and terms carefully.
            </p>
            
            <div className="inst-box">
              <div className="mb-4">
                <h5 className="text-primary mb-2">Test Instructions</h5>
                <div className="inst-content" dangerouslySetInnerHTML={{ __html: test.instructions || "No specific instructions provided." }} />
              </div>
              
              {test.termsConditions && (
                <div className="mb-4">
                  <h5 className="text-primary mb-2">Terms & Conditions</h5>
                  <div className="inst-content" dangerouslySetInnerHTML={{ __html: test.termsConditions }} />
                </div>
              )}

              <div className="mb-4">
                <h5 className="text-primary mb-2">Available Languages</h5>
                <p className="mb-0">
                  {test.availableLanguages?.map(lang => lang.name).join(", ") || "Default"}
                </p>
              </div>

              {!test.instructions && !test.termsConditions && (
                <ul className="inst-list">
                  <li>Test consists of {test.totalQuestions} multiple-choice questions</li>
                  <li>Duration: {test.duration} minutes</li>
                  <li>Negative Marking: {test.negativeMarking ? `Yes (${test.negativeMarkValue})` : "No"}</li>
                  <li>Do not refresh or close the browser during the test</li>
                  <li>Auto-submit enabled: {test.autoSubmit ? "Yes" : "No"}</li>
                </ul>
              )}
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

                  <div className="d-flex gap-3 mt-3">
                    <button
                      className="rts-btn btn-secondary py-3 px-5"
                      onClick={() => navigate(`/test?testId=${testId}`)}
                      style={{ borderRadius: "10px" }}
                    >
                      ← Back
                    </button>
                    <button
                      className="start-btn flex-grow-1"
                      disabled={!accepted || loading}
                      onClick={handleStart}
                      style={{ marginTop: 0 }}
                    >
                      {loading ? "Starting..." : "Start Test →"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="alert alert-warning mt-3">
                  You have already reached the maximum allowed attempts ({test.allowedAttempts}) or cannot attempt this test at this time.
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
