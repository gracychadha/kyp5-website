import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseGrid() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "courses")
      .then((response) => {
        setCourses(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="col-lg-12">
        {/* filter top-area  */}
        <div className="filter-small-top-full">
          <div className="left-filter">
            <span>Short By</span>
            <select className="nice-select" name="price">
              <option>All Category</option>
              <option value="asc">Design</option>
              <option value="desc">Development</option>
              <option value="pop">Popularity</option>
              <option value="low">Price</option>
              <option value="high">Stars</option>
            </select>
          </div>
          <div className="right-filter">
            <span>Showing {courses.length} courses</span>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <i className="fa-light fa-grid-2" />
                  <span>Grid</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i className="fa-light fa-list" />
                  <span> List</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* filter top-area end */}
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row mt--20 g-5">
              {courses?.map((course) => (
                <div
                  key={course.id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12"
                >
                  <div className="single-course-style-three">
                    <a href="#" className="thumbnail">
                      <img
                        src={import.meta.env.VITE_BASE_URL.replace("/api/public/", "") + course.thumbnail}
                        alt={course.title}
                      />
                      <div className="tag-thumb">
                        <span>{course.category?.name}</span>
                      </div>
                    </a>

                    <div className="body-area">
                      <div className="course-top">
                        <div className="tags">Course</div>
                        <div className="price">
                          {course.test?.totalMarks} Marks
                        </div>
                      </div>

                      <h5 className="title">{course.title}</h5>

                      <p className="desc">{course.description}</p>

                      <div className="leasson-students">
                        <div className="lesson">
                          <i className="fa-light fa-calendar-lines-pen" />
                          <span>{course.test?.totalQuestions} Questions</span>
                        </div>

                        <div className="students">
                          <i className="fa-light fa-clock" />
                          <span>{course.test?.duration} Min</span>
                        </div>
                      </div>

                      <div className="button-area">
                        <a href="#" className="rts-btn btn-primary">
                          View Course
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt--30">
              <div className="col-lg-12">
                {/* rts-pagination-area */}
                <div className="rts-pagination-area-2">
                  <ul>
                    <li>
                      <i className="fa-solid fa-chevron-left" />
                    </li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>
                      <i className="fa-solid fa-chevron-right" />
                    </li>
                  </ul>
                </div>
                {/* rts-pagination-area end */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row g-5 mt--30">
              <div className="col-lg-12">
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/11.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/12.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/13.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/14.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/15.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/16.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/17.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
                {/* rts single course */}
                <div className="rts-single-course course-list">
                  <a href="single-course.html" className="thumbnail">
                    <img src="assets/images/course/18.jpg" alt="course" />
                  </a>
                  <div className="information-inner">
                    <div className="tags-area-wrapper">
                      <div className="single-tag">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="disc">
                      Discover a world of knowledge and learning opportunities
                    </p>
                    <p className="teacher">Dr. Angela Yu</p>
                    <div className="rating-and-price">
                      <div className="rating-area">
                        <span>4.5</span>
                        <div className="stars">
                          <ul>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-sharp fa-regular fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="price-area">
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rts single course end */}
              </div>
            </div>
            <div className="row mt--0">
              <div className="col-lg-12">
                {/* rts-pagination-area */}
                <div className="rts-pagination-area-2">
                  <ul>
                    <li>
                      <i className="fa-solid fa-chevron-left" />
                    </li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>
                      <i className="fa-solid fa-chevron-right" />
                    </li>
                  </ul>
                </div>
                {/* rts-pagination-area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseGrid;
