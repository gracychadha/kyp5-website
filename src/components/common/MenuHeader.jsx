import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";

import { useSite } from "../../context/SiteContext";
import { useAuth } from "../../context/AuthContext";

function MenuHeader() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
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

  return (
    <>
      <div id="side-bar" className="side-bar header-two">
        <button className="close-icon-menu">
          <i className="far fa-times" />
        </button>

        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <Link to="/" className="main">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about-us" className="main">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/our-team" className="main">
                  Our Team
                </Link>
              </li>

              <li className={`has-droupdown ${servicesOpen ? "active" : ""}`}>
                <a
                  href="#"
                  className="main d-flex align-items-center justify-content-between"
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }}
                >
                  <span>Services</span>

                  <i
                    className={`fa-light ${
                      servicesOpen ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </a>

                <ul
                  className="submenu"
                  style={{
                    display: servicesOpen ? "block" : "none",
                    paddingLeft: "15px",
                    marginTop: "10px",
                  }}
                >
                  {tests.map((test) => (
                    <li key={test.id}>
                      <Link
                        className="tag"
                        to={`/test?testId=${test.id}`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {test.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link to="/gallery" className="main">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/our-blogs" className="main">
                  Our Blogs
                </Link>
              </li>

              <li>
                <Link to="/contact-us" className="main">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login / Profile Button */}
          {student ? (
            <div className="buttons-area mt-4">
              <div className="dropdown w-100">
                <button
                  className="rts-btn btn-primary dropdown-toggle d-flex align-items-center justify-content-between gap-2 w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderRadius: "50px",
                    padding: "12px 18px",
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={student.avatar || "/assets/images/auser.jpg"}
                      alt="User"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #fff",
                      }}
                    />

                    <div className="text-start">
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "18px",
                        }}
                      >
                        {student.name}
                      </div>

                      <small
                        style={{
                          fontSize: "11px",
                          opacity: 0.8,
                        }}
                      >
                        {student.email}
                      </small>
                    </div>
                  </div>
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 w-100"
                  style={{
                    borderRadius: "12px",
                    padding: "10px",
                  }}
                >
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
                        padding: "12px",
                        fontWeight: "500",
                      }}
                    >
                      <i className="fa-light fa-right-from-bracket"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="buttons-area mt-4">
              <Link className="rts-btn btn-primary w-100" to="/login">
                Login / Register
              </Link>
            </div>
          )}

          {/* Social Links */}
          <div className="rts-social-style-one pl--20 mt--50">
            <ul>
              {siteData?.data?.footer?.socialLinks?.facebook && (
                <li>
                  <a
                    href={siteData.data.footer.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              )}

              {siteData?.data?.footer?.socialLinks?.instagram && (
                <li>
                  <a
                    href={siteData.data.footer.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              )}

              {siteData?.data?.footer?.socialLinks?.linkedin && (
                <li>
                  <a
                    href={siteData.data.footer.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              )}

              {siteData?.data?.footer?.socialLinks?.youtube && (
                <li>
                  <a
                    href={siteData.data.footer.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuHeader;
