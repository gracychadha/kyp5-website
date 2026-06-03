import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { Center } from "@chakra-ui/react";

function LoginComponent() {
  const STUDENT_URL = import.meta.env.VITE_BASE_URL.replace(
    "public",
    "student",
  );

  const navigate = useNavigate();
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [isOtpVerification, setIsOtpVerification] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpEmail, setOtpEmail] = useState("");
  const [signupStep, setSignupStep] = useState(1);
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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("studentToken");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // LOGIN
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
          navigate("/");
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

        setMessage(
          "Please verify your email before logging in. OTP sent to your email.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
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
          "Registration successful! Please verify OTP sent to your email.",
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // OTP INPUT
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
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

  // VERIFY OTP
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

        setMessage("Email verified successfully!");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // RESEND OTP
  const handleResendOtp = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${STUDENT_URL}auth/resend-otp`, {
        email: otpEmail,
      });

      if (response.data.success) {
        setMessage("OTP resent successfully!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };
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

  return (
    <div className="login-registration-wrapper">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="login-page-form-area">
              {isOtpVerification ? (
                <>
                  <h4 className="title">Verify OTP</h4>

                  <p className="sub-title">Enter OTP sent to {otpEmail}</p>

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
                          }}
                        />
                      ))}
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    {message && <p style={{ color: "green" }}>{message}</p>}

                    <button
                      type="submit"
                      className="rts-btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Verifying..." : "Verify OTP"}
                    </button>

                    <div className="mt-4 d-flex justify-content-between">
                      <span
                        style={{
                          cursor: "pointer",
                          color: "var(--color-primary)",
                          fontWeight: "600",
                        }}
                        onClick={handleResendOtp}
                      >
                        Resend OTP
                      </span>

                      <span
                        style={{
                          cursor: "pointer",
                          color: "var(--color-primary)",
                          fontWeight: "600",
                        }}
                        onClick={() => {
                          setIsOtpVerification(false);
                        }}
                      >
                        Back
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h4 className="title">
                    {isLogin ? "Login" : "Create Account"}
                  </h4>

                  <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    {/* here is in steps */}
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
                              marginLeft: "5px",
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
                            required
                          />
                        </div>

                        <div className="single-input-wrapper">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInput}
                            required
                          />
                        </div>
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
                      </>
                    )}

                    {!isLogin && signupStep === 2 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">
                            Step {signupStep} of 4
                          </p>

                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                              marginLeft: "5px",
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
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    {!isLogin && signupStep === 3 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">
                            Step {signupStep} of 4
                          </p>

                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                              marginLeft: "5px",
                            }}
                          >
                            Academic Information
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
                            placeholder="Teacher Referrer"
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
                            name="city"
                            placeholder="City"
                            value={formData.city}
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
                      </>
                    )}
                    {!isLogin && signupStep === 4 && (
                      <>
                        <h5 className="mt-2 text-center">
                          <p className="text-muted p-0 mb-0">
                            Step {signupStep} of 4
                          </p>

                          <span
                            style={{
                              color: "var(--color-primary)",
                              fontWeight: "600",
                              marginLeft: "5px",
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
                            className="rts-btn btn-border"
                            type="button"
                            onClick={() => setSignupStep(signupStep - 1)}
                          >
                            Previous
                          </button>
                        )}

                        {signupStep < 4 ? (
                          <button
                            className="rts-btn btn-primary"
                            type="button"
                            onClick={handleNextStep}
                          >
                            Next
                          </button>
                        ) : (
                          <button className="rts-btn btn-primary" type="submit">
                            Sign Up
                          </button>
                        )}
                      </div>
                    )}
                    {/* {!isLogin && (
                      <div className="signup-progress">
                        <div className="progress-track">
                          <div
                            className="progress-fill"
                            style={{ width: `${(signupStep / 4) * 100}%` }}
                          ></div>
                        </div>

                        <div className="progress-steps">
                          <span className={signupStep >= 1 ? "active" : ""}>
                            Basic
                          </span>
                          <span className={signupStep >= 2 ? "active" : ""}>
                            Personal
                          </span>
                          <span className={signupStep >= 3 ? "active" : ""}>
                            Academic
                          </span>
                          <span className={signupStep >= 4 ? "active" : ""}>
                            Security
                          </span>
                        </div>
                      </div>
                    )} */}

                    {/* the end */}

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

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    {message && <p style={{ color: "green" }}>{message}</p>}

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
                        : "Already have an account?"}

                      <span
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError("");
                          setMessage("");
                        }}
                        style={{
                          cursor: "pointer",
                          color: "var(--color-primary)",
                          fontWeight: "600",
                          marginLeft: "5px",
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
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
