import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function TestComponent() {
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const inputsRef = useRef([]);


  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/instruction");
  };

  //  otp
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    e.target.value = value;

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pasteData)) return;

    pasteData.split("").forEach((digit, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = digit;
      }
    });

    inputsRef.current[pasteData.length - 1]?.focus();
  };
  // OTP

  // password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Form Submitted, send OTP");
    setIsOtpScreen(true);
  };
  return (
    <div className="login-registration-wrapper">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="login-page-form-area">
              {!isOtpScreen && (
                <>
                  <h4 className="title">Sign Up to Start Your Test</h4>
                  <p className="sub-title">
                    Create your account in seconds and begin your assessment
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="single-input-wrapper">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="single-input-wrapper">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div className="single-input-wrapper">
                      <input
                        type="text"
                        placeholder="+91 96897 ***** "
                        required
                      />
                    </div>
                    <div
                      className="single-input-wrapper"
                      style={{ position: "relative" }}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password*"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <i
                        className={`fa-light ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          fontSize: "16px",
                        }}
                      ></i>
                    </div>
                    <div
                      className="single-input-wrapper"
                      style={{ position: "relative" }}
                    >
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password*"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />

                      <i
                        className={`fa-light ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          fontSize: "16px",
                        }}
                      ></i>
                    </div>

                    {error && (
                      <p style={{ color: "red", marginBottom: "10px" }}>
                        {error}
                      </p>
                    )}

                    <button type="submit" className="rts-btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                </>
              )}

              {isOtpScreen && (
                <>
                  <h4 className="title">Verify Your Email</h4>
                  <p className="sub-title">
                    Enter the 6-digit code sent to your email
                  </p>

                  <div className="otp-wrapper d-flex justify-content-between mt-4">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        ref={(el) => (inputsRef.current[i] = el)}
                        maxLength="1"
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onPaste={handlePaste}
                        className="otp-input"
                        style={{
                          width: "45px",
                          height: "45px",
                          textAlign: "center",
                          fontSize: "18px",
                        }}
                      />
                    ))}
                  </div>

                  <button
                    className="rts-btn btn-primary mt-4 w-100"
                    onClick={handleVerify}
                  >
                    Verify & Continue
                  </button>

                  <p className="mt-3">
                    Didn't get code?{" "}
                    <span style={{ color: "blue" }}>Resend</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-thumbnail-login-p mt--100">
              <img
                src="assets/images/banner/login-bg.png"
                width={600}
                height={495}
                alt="login-form"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
