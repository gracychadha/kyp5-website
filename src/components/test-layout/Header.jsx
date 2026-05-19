import React from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSite } from "../../context/SiteContext";
import defaultLogo from "../../../public/assets/images/logo/kyp5.png";

function Header() {
  const { student, logout } = useAuth();
  const { siteData } = useSite();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");

  const logoUrl = siteData?.data?.branding?.logoUrl
    ? import.meta.env.VITE_BASE_URL.replace("/api/public/", "") + siteData.data.branding.logoUrl
    : defaultLogo;

  const handleBack = () => {
    if (location.pathname === "/instruction") {
      navigate(`/test?testId=${testId}`);
    } else if (location.pathname === "/question") {
      if (window.confirm("Are you sure you want to leave the test? Your progress might not be saved.")) {
        navigate(`/instruction?testId=${testId}`);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="header-one header--sticky py-2" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="header-one-wrapper d-flex justify-content-between align-items-center">
              <div className="left-side-header d-flex align-items-center gap-4">
                <Link to="/" className="logo-area">
                  <img src={logoUrl} alt="logo" style={{ maxHeight: "50px" }} />
                </Link>
                <button 
                  onClick={handleBack}
                  className="rts-btn btn-secondary py-2 px-3"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}
                >
                  <i className="fa-light fa-arrow-left"></i> Back
                </button>
              </div>

              <div className="right-side-header d-flex align-items-center gap-4">
                {student && (
                  <div className="user-profile d-flex align-items-center gap-3">
                    <div className="user-info text-end d-none d-md-block">
                      <span className="d-block fw-bold" style={{ fontSize: "14px" }}>{student.name}</span>
                      <span className="d-block text-muted" style={{ fontSize: "12px" }}>{student.email}</span>
                    </div>
                    <img 
                      src={student.avatar || "/assets/images/auser.jpg"} 
                      alt="User" 
                      style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-primary)" }}
                    />
                    <button 
                      onClick={() => {
                        if (window.confirm("Are you sure you want to logout?")) {
                          logout();
                          navigate("/");
                        }
                      }}
                      className="rts-btn btn-primary py-2 px-3"
                      style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}
                    >
                      <i className="fa-light fa-right-from-bracket"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
