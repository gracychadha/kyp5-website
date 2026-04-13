import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [aboutContent, setAboutContent] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "settings/site-config")
      .then((response) => {
        setAboutContent(response.data.data.about);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="about-area-start rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="about-one-left-image">
                <div className="first-order">
                  <div className="thumb-one">
                    <img src="/assets/images/about/03.jpg" alt="about" />

                    <div className="information">
                      <div className="left">
                        <h3 className="title">
                          <span className="counter">
                            {aboutContent.experienceYears || "0"}
                          </span>
                          k
                        </h3>
                        <span className="review">Positive Review</span>
                      </div>

                      <div className="right">
                        {/* SVG kept same */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={49}
                          height={45}
                          viewBox="0 0 49 45"
                          fill="none"
                        >
                          <path
                            d="M48.8274 16.6142C48.9437 16.2489 48.6895 15.9121 48.347 15.8791L43.9873 15.4516C43.2272 14.0595 42.4698 12.6582 41.709 11.2689C41.5065 11.1576 41.2882 11.0795 41.0652 11.0189C40.7736 10.7695 40.3334 10.8874 40.1849 11.2263L38.2501 15.6537L33.5064 16.5701C33.0455 16.6585 32.8859 17.2398 33.237 17.5515L36.8497 20.7596L36.2555 25.5544C36.2134 25.8934 36.478 26.1914 36.8187 26.1914C37.1004 26.1914 36.9733 26.1592 41.2735 23.6691L45.6495 25.7162C46.0788 25.9151 46.545 25.5367 46.4444 25.0799L45.5377 20.9545C46.6626 19.6901 47.7911 18.4053 49 17.2246C48.9425 17.0212 48.8849 16.8177 48.8274 16.6142Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="thumb-bottom">
                    <img
                      src={`${BASE_URL}${aboutContent.image1}`}
                      alt="about"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/images/about/03.jpg";
                      }}
                    />
                  </div>
                </div>

                <div className="second-order">
                  <img
                    src={`${BASE_URL}${aboutContent.image2}`}
                    alt="about"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/images/about/02.jpg";
                    }}
                  />

                  {/* <div className="vedio-icone">
                    <a
                      className="video-play-button play-video popup-video"
                      href="https://www.youtube.com/watch?v=ezbJwaLmOeM"
                    >
                      <span></span>
                    </a>

                    <div className="video-overlay">
                      <a className="video-overlay-close">×</a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12 pl--60 pl_lg--15 pl_md--10 pl_sm--10 pt_lg--50 pt_md--50 pt_sm--50">
              <div className="title-area-left-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>Gateway to Lifelong Learning</span>
                </div>

                <h2 className="title">{aboutContent.title}</h2>

                <p className="post-title">{aboutContent.summary}</p>
                <p>{aboutContent.content}</p>
              </div>

              <div className="about-inner-right-one">
                <div className="author-area">
                  <a href="/about-us" className="rts-btn btn-primary">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
