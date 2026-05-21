import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSite } from "../../context/SiteContext";
import defaultLogo from "../../../public/assets/images/logo/kyp5.png";
import Swal from "sweetalert2";
function Header() {
  const { student, logout } = useAuth();
  const { siteData } = useSite();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("testId");

  const logoUrl = siteData?.data?.branding?.logoUrl
    ? import.meta.env.VITE_BASE_URL.replace("/api/public/", "") +
      siteData.data.branding.logoUrl
    : defaultLogo;

  const handleBack = () => {
    if (location.pathname === "/instruction") {
      navigate(`/test?testId=${testId}`);
    } else if (location.pathname === "/question") {
      if (
        window.confirm(
          "Are you sure you want to leave the test? Your progress might not be saved.",
        )
      ) {
        navigate(`/instruction?testId=${testId}`);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <header
      className="header-one header--sticky py-2"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
    >
      <div className="header-one-wrapper test-container d-flex justify-content-between align-items-center">
        <div className="left-side-header d-flex align-items-center gap-4">
          <Link to="/" className="logo-area">
            <img src={logoUrl} alt="logo" style={{ maxHeight: "50px" }} />
          </Link>
        </div>

        <div className="right-side-header d-flex align-items-center gap-4">
          {student && (
            <div className="dropdown">
              <div
                className="d-flex align-items-center gap-2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={student.avatar || "/assets/images/auser.jpg"}
                  alt="User"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--color-primary)",
                  }}
                />

                <div className="d-none d-md-block">
                  <h6
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "18px",
                    }}
                  >
                    {student.name}
                  </h6>

                  <small
                    style={{
                      color: "#777",
                      fontSize: "12px",
                    }}
                  >
                    {student.email}
                  </small>
                </div>

                <i
                  className="fa-light fa-angle-down"
                  style={{
                    fontSize: "14px",
                    color: "#555",
                  }}
                ></i>
              </div>

              <ul
                className="dropdown-menu dropdown-menu-end shadow border-0 mt-3"
                style={{
                  minWidth: "220px",
                  borderRadius: "12px",
                  padding: "10px",
                }}
              >
                <li className="px-2 pb-2 border-bottom mb-2">
                  <div className="fw-bold">{student.name}</div>
                  <small className="text-muted">{student.email}</small>
                </li>

                <li>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={() => {
                      Swal.fire({
                        title: "Logout?",
                        text: "Are you sure you want to logout?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, Logout",
                        cancelButtonText: "Cancel",
                        confirmButtonColor: "#d33",
                        cancelButtonColor: "#3085d6",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          logout();

                          Swal.fire({
                            title: "Logged Out!",
                            text: "You have been logged out successfully.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                          });

                          setTimeout(() => {
                            navigate("/");
                          }, 1500);
                        }
                      });
                    }}
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      fontWeight: "500",
                    }}
                  >
                    <i className="fa-light fa-right-from-bracket"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
