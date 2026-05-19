import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function TestComponent() {
  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace("public", "student");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [isOtpVerification, setIsOtpVerification] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpEmail, setOtpEmail] = useState("");

  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  // ui states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // password toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (!testId) {
      navigate("/");
      return;
    }
    const token = localStorage.getItem("studentToken");
    if (token) {
      navigate(`/instruction?testId=${testId}`);
    }
  }, [navigate, testId]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/login`, {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        login(response.data.data.user, response.data.data.accessToken);
        setMessage("Login successful!");
        setTimeout(() => {
          navigate(`/instruction?testId=${testId}`);
        }, 1000);
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || "Login failed";
      setError(errMsg);
      if (err.response?.status === 403 && errMsg.toLowerCase().includes("verify your email")) {
        setOtpEmail(formData.email);
        setIsOtpVerification(true);
        setOtp("");
        setError("");
        setMessage("Please verify your email before logging in. An OTP has been sent to your email.");
      }
    } finally {
      setLoading(false);
    }
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
      
      if (response.data.success) {
        setOtpEmail(formData.email);
        setIsOtpVerification(true);
        setOtp("");
        setMessage("Registration successful! Please check your email for the OTP to verify your account.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/verify-otp`, {
        email: otpEmail,
        otp: otp
      });

      if (response.data.success) {
        login(response.data.data.user, response.data.data.accessToken);
        setMessage("Email verified successfully! You are now logged in.");
        setTimeout(() => {
          navigate(`/instruction?testId=${testId}`);
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/resend-otp`, {
        email: otpEmail
      });

      if (response.data.success) {
        setMessage("OTP has been resent successfully to your email.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-registration-wrapper">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="login-page-form-area">
              {isOtpVerification ? (
                <>
                  <h4 className="title">Verify Your OTP</h4>
                  <p className="sub-title">Enter the 6-digit OTP sent to {otpEmail}</p>

                  <form onSubmit={handleVerifyOtp}>
                    <div className="single-input-wrapper">
                      <input
                        type="text"
                        maxLength="6"
                        placeholder="Enter 6-Digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>

                    {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
                    {message && <p style={{ color: "green", marginBottom: "10px" }}>{message}</p>}

                    <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                      {loading ? "Verifying..." : "Verify OTP"}
                    </button>

                    <div className="d-flex justify-content-between mt-4" style={{ gap: "10px" }}>
                      <span 
                        style={{ color: "var(--color-primary)", cursor: "pointer", fontWeight: "600" }} 
                        onClick={handleResendOtp}
                      >
                        Resend OTP
                      </span>
                      <span 
                        style={{ color: "var(--color-primary)", cursor: "pointer", fontWeight: "600" }} 
                        onClick={() => {
                          setIsOtpVerification(false);
                          setError("");
                          setMessage("");
                        }}
                      >
                        Back to {isLogin ? "Login" : "Sign Up"}
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h4 className="title">{isLogin ? "Login to Start Your Test" : "Sign Up to Start Your Test"}</h4>
                  <p className="sub-title">{isLogin ? "Welcome back! Please login to continue" : "Create your account in seconds"}</p>

                  <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    {!isLogin && (
                      <div className="single-input-wrapper">
                        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleInput} required />
                      </div>
                    )}

                    <div className="single-input-wrapper">
                      <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInput} required />
                    </div>

                    {!isLogin && (
                      <div className="single-input-wrapper">
                        <input type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleInput} required />
                      </div>
                    )}

                    <div className="single-input-wrapper" style={{ position: "relative" }}>
                      <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInput} required />
                      <i className={`fa-light ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}></i>
                    </div>

                    {!isLogin && (
                      <div className="single-input-wrapper" style={{ position: "relative" }}>
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <i className={`fa-light ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}></i>
                      </div>
                    )}

                    {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
                    {message && <p style={{ color: "green", marginBottom: "10px" }}>{message}</p>}

                    <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                      {loading ? "Please Wait..." : (isLogin ? "Login" : "Sign Up")}
                    </button>

                    <p className="mt-4">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                      <span 
                        style={{ color: "var(--color-primary)", cursor: "pointer", fontWeight: "600" }} 
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError("");
                          setMessage("");
                        }}
                      >
                        {isLogin ? "Sign Up" : "Login"}
                      </span>
                    </p>
                  </form>
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
