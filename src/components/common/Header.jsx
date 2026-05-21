import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSite } from "../../context/SiteContext";
import { useAuth } from "../../context/AuthContext";
import logo from "../../../public/assets/images/logo/main-logo.png";
import axios from "axios";
import Swal from "sweetalert2";
function Header() {
  const { siteData } = useSite();
  const { student, logout } = useAuth();
  const [tests, setTests] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "/tests",
        );
        if (response.data.success) {
          setTests(response.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
      }
    };
    fetchTests();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="header-one header--sticky">
      <div className="header-top-one-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top-one">
                <div className="left-information">
                  <a href="mailto:someone@example.com" className="email">
                    <i className="fa-light fa-envelope" />
                    {siteData?.data?.contact?.email
                      ? siteData.data.contact.email
                      : "info@kyp5.com"}
                  </a>
                  <a
                    href="tel: { siteData?.data?.contact?.phone ? siteData.data.contact.phone : '+91 83528 03233' }"
                    className="email"
                  >
                    <i className="fa-light fa-phone" />
                    {siteData?.data?.contact?.phone
                      ? siteData.data.contact.phone
                      : "+91 83528 03233"}
                  </a>
                  <a
                    href="https://kyp5.com/assets/upload/msme.pdf"
                    className="email"
                    target="_blank"
                  >
                    <i className="fa-light fa-handshake"></i>
                    MSME
                  </a>
                </div>
                <div className="right-information">
                  <ul className="rts-dropdown-menu switcher-language">
                    <li className="has-child-menu">
                      <a href="#">
                        <img
                          className="left-image"
                          src="assets/images/flag-01.svg"
                          alt="Language Images"
                        />
                        <span className="menu-item">English</span>
                        <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-03.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Deutsch</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-02.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Portuguese</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/flag-04.svg"
                              alt="Language Images"
                            />
                            <span className="menu-item">Russian</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="rts-dropdown-menu switcher-currency">
                    <li className="has-child-menu">
                      <a href="#">
                        <span className="menu-item">USD</span>
                        <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="menu-item">Euro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Real</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Ruble</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-one-wrapper">
              <div className="left-side-header">
                <a href="/" className="logo-area">
                  <img
                    id="main-logo"
                    src={
                      siteData?.data?.branding?.logoUrl
                        ? import.meta.env.VITE_BASE_URL.replace(
                            "/api/public/",
                            "",
                          ) + siteData.data.branding.logoUrl
                        : logo
                    }
                    alt="logo"
                  />
                </a>
              </div>
              <div className="main-nav-one">
                <nav>
                  <ul>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/about-us">
                        About us
                      </Link>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/our-team">
                        Our Team
                      </Link>
                    </li>

                    <li className="has-dropdown">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                      <ul className="submenu">
                        {tests.map((test) => (
                          <li key={test.id}>
                            <Link
                              className="submenu-link"
                              to={`/test?testId=${test.id}`}
                            >
                              {test.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li className="" style={{ position: "static" }}>
                      <Link className="nav-link" to="/our-blogs">
                        Our Blogs
                      </Link>
                    </li>
                    <div className="buttons-area">
                      <Link
                        className="rts-btn btn-primary me-2"
                        to="/contact-us"
                      >
                        Contact Us
                      </Link>
                    </div>
                    {student ? (
                      <li
                        className="has-dropdown"
                        style={{ marginLeft: "20px" }}
                      >
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
                              <small className="text-muted">
                                {student.email}
                              </small>
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
                      </li>
                    ) : (
                      <div className="buttons-area">
                        <Link className="rts-btn btn-primary" to="/login">
                          Login / Register
                        </Link>
                      </div>
                    )}
                  </ul>
                </nav>
              </div>

              <div className="header-right-area-one d-lg-none">
                <div className="menu-btn" id="menu-btn">
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y={14} width={20} height={2} fill="#1F1F25" />
                    <rect y={7} width={20} height={2} fill="#1F1F25" />
                    <rect width={20} height={2} fill="#1F1F25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
