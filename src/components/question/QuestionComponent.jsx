import React from "react";
import userImage from "../../../public/assets/images/auser.jpg";
function QuestionComponent() {
  return (
    <>
      <section className="test-wrapper">
        <div className="test-container ">
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

              <div className="qp-legend-wrapper">
                <div className="qp-legend-item">
                  <span className="qp-box qp-attempted">0</span>
                  <p className="qp-label">Attempted</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-marked">0</span>
                  <p className="qp-label">Marked</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-not-visited">99</span>
                  <p className="qp-label">Not Visited</p>
                </div>

                <div className="qp-legend-item">
                  <span className="qp-box qp-not-answered">1</span>
                  <p className="qp-label">Not Answered</p>
                </div>

                <div className="qp-legend-item w-100">
                  <span className="qp-box qp-marked-answered">
                    0 <i className="fa-solid fa-check"></i>
                  </span>
                  <p className="qp-label">Marked & Answered</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-data">
              <h5 className="question-palette__title">
                <strong>Test:</strong> Psychemetric Test
              </h5>
            </div>
            <div className="user-card">
              <div className="question-palette">
                <div className="question-palette__grid scrollable-grid">
                  {[...Array(100)].map((_, index) => (
                    <div
                      key={index}
                      className={`question-palette__item ${
                        index === 0 ? "question-palette__item--active" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
              <button className="rts-btn btn-primary mt-4 w-100">
                Submit Test
              </button>
            </div>
          </div>

          <div className="question-main-container">
            <div className="title-section">
              <h6 className="title">
                <strong>Test:</strong> Psychemetric Test
              </h6>
            </div>
            <div className="main-container-q">
              <div className="q-header d-flex justify-content-between align-items-center mb-5">
                <h5 class="title mb-0">Question 1:</h5>

                <span class="timer  text-dark">Time: 00:32</span>
              </div>
              <div className="q-main-section">
                <div className="question-card border rounded p-4">
                  <h5 className="question-text  mb-4">
                    Which one of the following Indian States has no
                    international boundary?
                  </h5>

                  <div className="options-container d-flex flex-column gap-3">
                    <label className="option-box">
                      <input type="radio" name="q1" />
                      <span>Bihar</span>
                    </label>

                    <label className="option-box">
                      <input type="radio" name="q1" />
                      <span>Chhattisgarh</span>
                    </label>

                    <label className="option-box">
                      <input type="radio" name="q1" />
                      <span>Uttarakhand</span>
                    </label>

                    <label className="option-box">
                      <input type="radio" name="q1" />
                      <span>Meghalaya</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="q-button-container d-flex justify-content-between">
                <div className="left-btns d-flex gap-2">
                  <button className="rts-btn text-white btn-secondary mt-4">
                    Mark for Review & Next
                  </button>
                  <button className="rts-btn text-white btn-danger mt-4">
                    Clear response
                  </button>
                </div>

                <div className="right-btn">
                  <button className="rts-btn btn-primary mt-4">
                    Save & Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuestionComponent;
