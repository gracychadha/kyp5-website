import React from "react";

function CourseGrid() {
  return (
    <>
      <div className="col-lg-9">
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
            <span>Showing 1-9 of 19 results</span>
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/01.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/02.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        What to Write the Ultimate 1 Page Strategic Business
                        Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/03.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Main to Write the Ultimate 1 Page Strategic Business
                        Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/04.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/05.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/06.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/07.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/08.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/05.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/06.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/07.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="assets/images/course/08.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
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
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                    <div className="course-content-area">
                      <h5 className="heading-title">
                        <a href="single-course.html">
                          The Complete Web Developer in 2023: Zero to Mastery
                        </a>
                      </h5>
                      <div className="tags-area-wrapper">
                        <div className="single-tag">
                          <span>Beginner</span>
                        </div>
                        <div className="lesson-studente">
                          <div className="lesson">
                            <i className="fa-light fa-calendar-lines-pen" />
                            <span>25 Lessons</span>
                          </div>
                          <div className="lesson">
                            <i className="fa-light fa-user-group" />
                            <span>54</span>
                          </div>
                        </div>
                      </div>
                      <p className="desc">
                        Learn to create Machine Learning with Algorithms in
                        Python and R from two Data Science experts included.
                      </p>
                      <ul className="wrapper-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Master Machine Learning on Python
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Make accurate predictions
                        </li>
                      </ul>
                      <div className="button-area">
                        <a href="cart.html" className="rts-btn btn-primary">
                          Add To Cart
                        </a>
                        <a href="wishlist.html" className="wishlist-btn">
                          <i className="fa-thin fa-circle-heart" />
                        </a>
                      </div>
                      <div className="shape"></div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
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
