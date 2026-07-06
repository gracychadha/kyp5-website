import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function TestComponent() {
  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace(
    "public",
    "student",
  );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [isOtpVerification, setIsOtpVerification] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpEmail, setOtpEmail] = useState("");

  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    schoolInstitute: "",
    teacherReferrer: "",
  });
  const [signupStep, setSignupStep] = useState(1);
  const validateStep = () => {
    switch (signupStep) {
      case 1:
        if (!formData.name.trim()) {
          setError("Full Name is required");
          return false;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
          setError("Please enter a valid 10-digit phone number");
          return false;
        }

        if (!formData.email.trim()) {
          setError("Email Address is required");
          return false;
        }

        break;

      case 2:
        if (!formData.fatherName.trim()) {
          setError("Father's Name is required");
          return false;
        }

        if (!formData.motherName.trim()) {
          setError("Mother's Name is required");
          return false;
        }

        if (!formData.dateOfBirth) {
          setError("Date of Birth is required");
          return false;
        }

        if (!formData.gender) {
          setError("Gender is required");
          return false;
        }

        break;

      case 3:
        if (!formData.schoolInstitute.trim()) {
          setError("School / Institute is required");
          return false;
        }

        if (!formData.address.trim()) {
          setError("Address is required");
          return false;
        }

        if (!formData.country.trim()) {
          setError("Country is required");
          return false;
        }

        if (!formData.city.trim()) {
          setError("City is required");
          return false;
        }

        if (!formData.state.trim()) {
          setError("State is required");
          return false;
        }

        break;

      default:
        break;
    }

    setError("");
    return true;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setSignupStep((prev) => prev + 1);
    }
  };
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
        password: formData.password,
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
      if (
        err.response?.status === 403 &&
        errMsg.toLowerCase().includes("verify your email")
      ) {
        setOtpEmail(formData.email);
        setIsOtpVerification(true);
        setOtp(["", "", "", "", "", ""]);
        setError("");
        setMessage(
          "Please verify your email before logging in. An OTP has been sent to your email.",
        );
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
      const response = await axios.post(
        `${STUDENT_URL}auth/register`,
        formData,
      );

      if (response.data.success) {
        setOtpEmail(formData.email);
        setIsOtpVerification(true);
        setOtp(["", "", "", "", "", ""]);
        setMessage(
          "Registration successful! Please check your email for the OTP to verify your account.",
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // move to next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    // move back on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text").trim();

    if (!/^\d{6}$/.test(pastedData)) return;

    const otpArray = pastedData.split("");
    setOtp(otpArray);

    document.getElementById("otp-5").focus();
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post(`${STUDENT_URL}auth/verify-otp`, {
        email: otpEmail,
        otp: otp.join(""),
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
        email: otpEmail,
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
                  <p className="sub-title">
                    Enter the 6-digit OTP sent to {otpEmail}
                  </p>

                  <form onSubmit={handleVerifyOtp}>
                    <div
                      className="d-flex justify-content-center gap-2 mb-4"
                      onPaste={handleOtpPaste}
                    >
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                          onKeyDown={(e) => handleOtpKeyDown(e, index)}
                          required
                          style={{
                            width: "55px",
                            height: "55px",
                            textAlign: "center",
                            fontSize: "22px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            outline: "none",
                          }}
                        />
                      ))}
                    </div>

                    {error && (
                      <p style={{ color: "red", marginBottom: "10px" }}>
                        {error}
                      </p>
                    )}
                    {message && (
                      <p style={{ color: "green", marginBottom: "10px" }}>
                        {message}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="rts-btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Verifying..." : "Verify OTP"}
                    </button>

                    <div
                      className="d-flex justify-content-between mt-4"
                      style={{ gap: "10px" }}
                    >
                      <span
                        style={{
                          color: "var(--color-primary)",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                        onClick={handleResendOtp}
                      >
                        Resend OTP
                      </span>
                      <span
                        style={{
                          color: "var(--color-primary)",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
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
                  <h4 className="title">
                    {isLogin
                      ? "Login to Start Your Test"
                      : "Sign Up to Start Your Test"}
                  </h4>
                  <p className="sub-title">
                    {isLogin
                      ? "Welcome back! Please login to continue"
                      : "Create your account in seconds"}
                  </p>

                  <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    {!isLogin && signupStep === 1 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">
                            Step {signupStep} of 4
                          </p>
                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                            }}
                          >
                            Basic Information
                          </span>
                        </h5>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInput}
                          />
                        </div>
                      </>
                    )}
                    {/* Step 2 */}
                    {!isLogin && signupStep === 2 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">Step 2 of 4</p>
                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                            }}
                          >
                            Personal Information
                          </span>
                        </h5>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="fatherName"
                            placeholder="Father's Name"
                            value={formData.fatherName}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="motherName"
                            placeholder="Mother's Name"
                            value={formData.motherName}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInput}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </>
                    )}
                    {/* Step 3 */}
                    {!isLogin && signupStep === 3 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">Step 3 of 4</p>
                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                            }}
                          >
                            Address Details
                          </span>
                        </h5>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="schoolInstitute"
                            placeholder="School / Institute"
                            value={formData.schoolInstitute}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="teacherReferrer"
                            placeholder="Teacher Referrer (Optional)"
                            value={formData.teacherReferrer}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleInput}
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInput}
                          />
                        </div>
                      </>
                    )}
                    {/* Step 4 */}
                    {!isLogin && signupStep === 4 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">Step 4 of 4</p>
                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                            }}
                          >
                            Security
                          </span>
                        </h5>

                        <div
                          className="single-input-wrapper"
                          style={{ position: "relative" }}
                        >
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInput}
                            required
                          />

                          <i
                            className={`fa-light ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>

                        <div
                          className="single-input-wrapper"
                          style={{ position: "relative" }}
                        >
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />

                          <i
                            className={`fa-light ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </>
                    )}

                    {!isLogin && (
                      <div className="d-flex gap-3 mt-3">
                        {signupStep > 1 && (
                          <button
                            type="button"
                            className="rts-btn btn-border"
                            onClick={() => setSignupStep(signupStep - 1)}
                          >
                            Previous
                          </button>
                        )}

                        {signupStep < 4 ? (
                          <button
                            type="button"
                            className="rts-btn btn-primary"
                            onClick={handleNextStep}
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="rts-btn btn-primary"
                            disabled={loading}
                          >
                            {loading ? "Please Wait..." : "Sign Up"}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Login Form */}

                    {isLogin && (
                      <div className="single-input-wrapper">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    )}

                    {isLogin && (
                      <div
                        className="single-input-wrapper"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInput}
                          required
                        />

                        <i
                          className={`fa-light ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                        ></i>
                      </div>
                    )}

                    {error && (
                      <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                    )}

                    {message && (
                      <p style={{ color: "green", marginTop: "10px" }}>
                        {message}
                      </p>
                    )}

                    {isLogin && (
                      <button
                        type="submit"
                        className="rts-btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Please Wait..." : "Login"}
                      </button>
                    )}
                    <p className="mt-4">
                      {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                      <span
                        style={{
                          color: "var(--color-primary)",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
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
              <img
                src="/assets/images/banner/login-bg.png"
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
