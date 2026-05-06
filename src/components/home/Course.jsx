import React, { useState, useEffect } from "react";
import axios from "axios";
function Course() {
  const [courses, setCourses] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "courses")
      .then((response) => {
        setCourses(response.data.data.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="course-area-start rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <img src="assets/images/banner/bulb.png" alt="icon" />
                    <span>Courses</span>
                  </div>
                  <h2 className="title">Explore Featured Courses</h2>
                  <p className="post-title">
                    You'll find something to spark your curiosity and enhance
                  </p>
                </div>
                <div className="button-group filters-button-group">
                  <a href="/courses" className="rts-btn btn-primary">
                    View All Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="filter row g-5 mt--20 portfolio-feed personal">
            {courses.map((course) => (
              <div
                key={course.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="rts-single-course">
                  <a href="#" className="thumbnail">
                    <img
                      src={
                        course.thumbnail
                          ? `${BASE_URL}${course.thumbnail}`
                          : "/assets/images/course/01.jpg"
                      }
                      alt={course.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/images/course/default.jpg";
                      }}
                      style={{ height: "200px" }}
                    />
                  </a>

                  <div className="tags-area-wrapper">
                    <div className="single-tag">
                      <span>{course.category?.name}</span>
                    </div>
                  </div>

                  <div className="lesson-studente">
                    <div className="lesson">
                      <span>{course.test?.totalQuestions} Questions</span>
                    </div>
                    <div className="lesson">
                      <span>{course.test?.duration} Min</span>
                    </div>
                  </div>

                  <h5 className="title">{course.title}</h5>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: course.description.slice(0, 20) + "...",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
