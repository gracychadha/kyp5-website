import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

function WorkProcess({ service }) {
  return (
    <>
      <section className="how-work-section ">
        <div className="container">
          {/* Heading */}
          <div className="title-area-center-style">
            <div className="pre-title">
              <img src="/assets/images/banner/bulb.png" alt="icon" />
              <span>Simple Steps</span>
            </div>
            <h2 className="title">
              {service?.workProcessTitle || "How it works"}
            </h2>
            <p className="post-title">
              No confusion or delays. Just fast and reliable testing.
            </p>
          </div>

          <div className="row align-items-center g-5 how-work-container">
            {/* Left Image */}
            <div className="col-lg-5">
              <div className="work-image">
                <img
                  src={
                    service?.workProcessImage
                      ? BASE_URL + service.workProcessImage
                      : "/assets/images/course/13.jpg"
                  }
                  alt="How it works"
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="col-lg-7">
              <div className="work-steps">
                {service?.workProcessSteps?.length > 0 ? (
                  service.workProcessSteps.map((step, index) => (
                    <div className="step-item" key={index}>
                      <div className="step-icon">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="step-item">
                      <div className="step-icon">1</div>
                      <div className="step-content">
                        <h4>Order Your Test Kit</h4>
                        <p>
                          Choose a DNA, BP, or wellness kit. We’ll deliver it
                          straight to your doorstep.
                        </p>
                      </div>
                    </div>

                    <div className="step-item">
                      <div className="step-icon">2</div>
                      <div className="step-content">
                        <h4>Collect & Return</h4>
                        <p>
                          Follow easy instructions to collect your sample. Use
                          the prepaid mailer to send it back.
                        </p>
                      </div>
                    </div>

                    <div className="step-item">
                      <div className="step-icon">3</div>
                      <div className="step-content">
                        <h4>Get Secure Results Online</h4>
                        <p>
                          Your results are reviewed by certified labs and shared
                          securely via your personal dashboard.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkProcess;
