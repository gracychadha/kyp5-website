import React, { useState, useEffect } from "react";
import axios from "axios";
function Instructor() {
  const [Teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "teams")
      .then((response) => {
        setTeams(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="instrustor-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area align-items-end">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <img src="/assets/images/banner/bulb.png" alt="icon" />
                    <span>Our Team</span>
                  </div>

                  <h2 className="title">Our Professional Instructor</h2>

                  <p className="post-title">
                    You'll find something to spark your curiosity and enhance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--10">
            {/* Instructor 1 */}
            {Teams.map((instructor) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-12"
                key={instructor.id}
              >
                <div className="single-instructor">
                  <div className="thumbnail-img">
                    <a href="#" className="thumbnail">
                      <img
                        src={
                          instructor.avatar
                            ? import.meta.env.VITE_BASE_URL.replace(
                                "/api/public/",
                                "",
                              ) + instructor.avatar
                            : "/assets/images/instructor/01.jpg"
                        }
                        alt="instructor"
                      />
                    </a>

                    <div className="social-img-instructor">
                      <ul>
                        <li>
                          <a
                            href={
                              instructor.instagram ? instructor.instagram : "#"
                            }
                            target={instructor.instagram ? "_blank" : ""}
                            rel={
                              instructor.instagram ? "noopener noreferrer" : ""
                            }
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li className="bottom">
                          <a
                            href={instructor.email ? instructor.email : "#"}
                            target={instructor.email ? "_blank" : ""}
                            rel={instructor.email ? "noopener noreferrer" : ""}
                          >
                            <i className="fa-solid fa-envelope"></i>
                          </a>
                        </li>
                        <li className="bottom">
                          <a
                            href={instructor.twitter ? instructor.twitter : "#"}
                            target={instructor.twitter ? "_blank" : ""}
                            rel={
                              instructor.twitter ? "noopener noreferrer" : ""
                            }
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li className="bottom">
                          <a
                            href={
                              instructor.linkedin ? instructor.linkedin : "#"
                            }
                            target={instructor.linkedin ? "_blank" : ""}
                            rel={
                              instructor.linkedin ? "noopener noreferrer" : ""
                            }
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="bottom">
                          <a
                            href={
                              instructor.facebook ? instructor.facebook : "#"
                            }
                            target={instructor.facebook ? "_blank" : ""}
                            rel={
                              instructor.facebook ? "noopener noreferrer" : ""
                            }
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a href="#">
                    <h5 className="title">
                      {instructor.name || "Instructor Name"}
                    </h5>
                  </a>

                  <p>{instructor.role || "Instructor"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructor;
