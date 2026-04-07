import React, { useState, useEffect } from "react";
import axios from "axios";

function InstructorGrid() {
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
          <div className="row g-5">
            {Teams.map((instructor) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {/* single instrustor */}
                <div className="single-instructor">
                  <div className="thumbnail-img">
                    <a href="" className="thumbnail">
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
                    <h5 className="title">{instructor.name || "Instructor Name"}</h5>
                  </a>
                  <p>{instructor.role || "Instructor"}</p>
                </div>
                {/* single instrustor end */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorGrid;
