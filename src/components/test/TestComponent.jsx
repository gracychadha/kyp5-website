import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function TestComponent() {
  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace("public", "student");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");

  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const inputsRef = useRef([]);

  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  // ui states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // password toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    if (token) {
      navigate(`/instruction${testId ? `?testId=${testId}` : ""}`);
    }
  }, [navigate, testId]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/register`, formData);
      setMessage(response.data.message || "OTP sent successfully");
      setIsOtpScreen(true);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter valid OTP");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/verify-otp`, {
        email: formData.email,
        otp,
      });

      if (response.data.success) {
        localStorage.setItem("studentToken", response.data.data.accessToken);
        localStorage.setItem("studentData", JSON.stringify(response.data.data.user));
        setMessage("Verified successfully!");
        setTimeout(() => {
          navigate(`/instruction${testId ? `?testId=${testId}` : ""}`);
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;
    
    let otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));

    if (value && index < 5) inputsRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
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
                  <p className="sub-title">Create your account in seconds</p>

                  <form onSubmit={handleRegister}>
                    <div className="single-input-wrapper">
                      <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleInput} required />
                    </div>

                    <div className="single-input-wrapper">
                      <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInput} required />
                    </div>

                    <div className="single-input-wrapper">
                      <input type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleInput} required />
                    </div>

                    <div className="single-input-wrapper" style={{ position: "relative" }}>
                      <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInput} required />
                      <i className={`fa-light ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}></i>
                    </div>

                    <div className="single-input-wrapper" style={{ position: "relative" }}>
                      <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                      <i className={`fa-light ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}></i>
                    </div>

                    {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
                    {message && <p style={{ color: "green", marginBottom: "10px" }}>{message}</p>}

                    <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                      {loading ? "Please Wait..." : "Sign Up"}
                    </button>
                  </form>
                </>
              )}

              {isOtpScreen && (
                <>
                  <h4 className="title">Verify Your Email</h4>
                  <p className="sub-title">Enter the 6-digit code sent to your email</p>
                  <div className="otp-wrapper d-flex justify-content-between mt-4 mb-4">
                    {[...Array(6)].map((_, i) => (
                      <input key={i} ref={(el) => (inputsRef.current[i] = el)} maxLength="1" onChange={(e) => handleChange(e, i)} onKeyDown={(e) => handleKeyDown(e, i)} className="otp-input" style={{ width: "45px", height: "45px", textAlign: "center", fontSize: "18px" }} />
                    ))}
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <button className="rts-btn btn-primary w-100" onClick={handleVerify} disabled={loading}>
                    {loading ? "Verifying..." : "Verify & Continue"}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-thumbnail-login-p mt--100">
              <img src="/assets/images/banner/login-bg.png" width={600} height={495} alt="login-form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
