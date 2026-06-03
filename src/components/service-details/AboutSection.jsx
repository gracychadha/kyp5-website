import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

function AboutSection({ service }) {
  
  return (
    <>
    
      {/* join our team area start */}
      <div className="join-our-team-area v-1 rts-section-gap shape-move">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-about-image">
                {/* <img src="assets/images/about-service.jpg" alt="join" /> */}
                <img
                  src={
                    service?.aboutImage
                      ? BASE_URL + service.aboutImage
                      : "/assets/images/about-service.jpg"
                  }
                  alt={service?.title || "About Service"}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area-left-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>{service?.title || "About Service"}</span>
                </div>
                <h2 className="title">
                  {service?.aboutTitle || "What is Potential Prism?"}
                </h2>
                <p className="post-title" align="justify">
                  {service?.aboutDescription ||
                    "Potential Prism is a comprehensive platform designed to empower individuals and organizations to unlock their full potential."}
                </p>
                <a href="/contact-us" className="rts-btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area shape-image">
          <img
            src="/assets/images/instructor/shape/05.png"
            data-speed="0.04"
            alt="shape"
            className="shape"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
