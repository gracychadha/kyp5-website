import React, { useState } from "react";
import userImage from "../../../public/assets/images/auser.jpg";

function Instructions() {
  const [accepted, setAccepted] = useState(false);

  const handleStart = () => {
    if (!accepted) return;

    window.location.href = "/question";
  };

  return (
    <section className="test-wrapper">
      <div className="test-container">
        <div className="user-panel">
          <div className="user-card">
            <div className="d-flex">
              <div className="img-user">
                <img src={userImage} className="user-img" />
              </div>
              <div className="user-data">
                <h4 className="user-name">John Doe</h4>
                <p className="user-email">john@example.com</p>
              </div>
            </div>
            <hr />
            <div className="user-details">
              <p>
                <strong>Test:</strong> Personality Test
              </p>
              <p>
                <strong>Duration:</strong> 30 mins
              </p>
              <p>
                <strong>Questions:</strong> 25
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE (INSTRUCTIONS) */}
        <div className="instruction-panel">
          <div className="instruction-card">
            <h2 className="inst-title">INSTRUCTION</h2>
            <p className="inst-subtitle">
              Please read the following instructions carefully before starting
              the test.
            </p>
            <div className="inst-box">
              <ul className="inst-list">
                <li>Test consists of multiple-choice questions</li>
                <li>Each question has only one correct answer</li>
                <li>Do not refresh or close the browser</li>
                <li>The test is time-bound</li>
                <li>Answers cannot be changed after submission</li>
              </ul>
            </div>
            <div className="inst-action">
              <label className="checkbox-wrap">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <span className="checkbox-text">
                  I have read and understood the instructions
                </span>
              </label>

              <button
                className="start-btn"
                disabled={!accepted}
                onClick={handleStart}
              >
                Start Test →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
