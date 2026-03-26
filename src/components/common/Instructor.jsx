import React from "react";

function Instructor() {
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
                    <span>Instructor</span>
                  </div>

                  <h2 className="title">Our Professional Instructor</h2>

                  <p className="post-title">
                    You'll find something to spark your curiosity and enhance
                  </p>
                </div>

                <a href="#" className="rts-btn btn-primary with-arrow">
                  View All Teacher
                  <i className="fa-light fa-arrow-right"></i>
                </a>

              </div>

            </div>
          </div>

          <div className="row g-5 mt--10">

            {/* Instructor 1 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-instructor">

                <div className="thumbnail-img">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/instructor/01.jpg" alt="instructor" />
                  </a>

                  <div className="social-img-instructor">
                    <ul>
                      <li><a href="#"><i className="fa-sharp fa-light fa-share-nodes"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-skype"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                  </div>
                </div>

                <a href="#">
                  <h5 className="title">Emma Elizabeth</h5>
                </a>

                <p>Assistant Teacher</p>

              </div>
            </div>

            {/* Instructor 2 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-instructor">

                <div className="thumbnail-img">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/instructor/02.jpg" alt="instructor" />
                  </a>

                  <div className="social-img-instructor">
                    <ul>
                      <li><a href="#"><i className="fa-sharp fa-light fa-share-nodes"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-skype"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                  </div>
                </div>

                <a href="#">
                  <h5 className="title">Thomas Fred</h5>
                </a>

                <p>Assistant Teacher</p>

              </div>
            </div>

            {/* Instructor 3 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-instructor">

                <div className="thumbnail-img">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/instructor/03.jpg" alt="instructor" />
                  </a>

                  <div className="social-img-instructor">
                    <ul>
                      <li><a href="#"><i className="fa-sharp fa-light fa-share-nodes"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-skype"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                  </div>
                </div>

                <a href="#">
                  <h5 className="title">Dana White</h5>
                </a>

                <p>UI/UX Expert</p>

              </div>
            </div>

            {/* Instructor 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-instructor">

                <div className="thumbnail-img">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/instructor/04.jpg" alt="instructor" />
                  </a>

                  <div className="social-img-instructor">
                    <ul>
                      <li><a href="#"><i className="fa-sharp fa-light fa-share-nodes"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-skype"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li className="bottom"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                  </div>
                </div>

                <a href="#">
                  <h5 className="title">Elizabeth Olsen</h5>
                </a>

                <p>Assistant Teacher</p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Instructor;