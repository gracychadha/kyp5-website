
import React, { useState } from "react";
import userImage from "../../../public/assets/images/auser.jpg";
const questionsData = [
  {
    id: 1,
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    id: 2,
    question: "Which environment do you prefer?",
    options: ["Quiet", "Social", "Adventurous", "Organized"],
  },
  {
    id: 3,
    question: "How do you make decisions?",
    options: ["Logic", "Emotion", "Advice", "Instinct"],
  },
];
function QuestionComponent() {
     const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questionsData[currentIndex];

  // handle option select
  const handleOptionChange = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: option,
    });
  };

  // next
  const handleNext = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // previous
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // submit
  const handleSubmit = () => {
    console.log("Answers:", answers);
    alert("Test Submitted!");
  };

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
        {/* RIGHT SIDE (QuestionComponent) */}
        <div className="instruction-panel">
           <section className="testq-wrapper">
      <div className="testq-container">

        {/* Header */}
        <div className="testq-header">
          <h3>Question {currentIndex + 1} / {questionsData.length}</h3>
        </div>

        {/* Question Card */}
        <div className="testq-card">
          <h4 className="testq-question">
            {currentQuestion.question}
          </h4>

          {/* Options */}
          <div className="testq-options">
            {currentQuestion.options.map((opt, index) => (
              <label key={index} className="testq-option">
                <input
                  type="radio"
                  name="answer"
                  checked={answers[currentQuestion.id] === opt}
                  onChange={() => handleOptionChange(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="testq-actions">
          <button
            className="testq-btn prev-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>

          {currentIndex === questionsData.length - 1 ? (
            <button className="testq-btn submit-btn" onClick={handleSubmit}>
              Submit Test
            </button>
          ) : (
            <button className="testq-btn next-btn" onClick={handleNext}>
              Next →
            </button>
          )}
        </div>

      </div>
    </section>
        </div>
      </div>
    </section>
  );
}

export default QuestionComponent;

