import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

function WhyChoose({ service }) {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="why-choose-us-service ">
        <div className="container">
          <div className="title-area-center-style">
            <div className="pre-title">
              <img src="/assets/images/banner/bulb.png" alt="icon" />
              <span>Why Choose</span>
            </div>
            <h2 className="title">
              {service?.benefitsMainTitle || "Why Choose Us?"}
            </h2>
            <p className="post-title">
              You'll find something to spark your curiosity and enhance
            </p>
          </div>

          <div className="position-relative">
            {/* Dashed Curve */}
            <svg
              className="curve-line"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 C250,300 450,300 650,150 C850,0 1000,50 1200,200"
                fill="none"
                stroke="#d9e8e8"
                strokeWidth={4}
                strokeDasharray="12 12"
              />
            </svg>
            <div className="row justify-content-center g-4 why-choose-container">
              {service?.benefitsCards?.length > 0 ? (
                service.benefitsCards.map((card, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="why-card">
                      <div className="icon-box">
                        <i className="fa-light fa-user-shield"></i>
                      </div>

                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon-box">
                        <i className="fa-light fa-user-shield"></i>
                      </div>
                      <h4>Expert-Led Learning</h4>
                      <p>
                        Learn from experienced mentors and industry
                        professionals with practical guidance.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon-box">
                        <i className="fa-light fa-award"></i>
                      </div>
                      <h4>Career-Focused Programs</h4>
                      <p>
                        Build real-world skills through job-oriented courses
                        designed for future success.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon-box">
                        <i className="fa-light fa-clock"></i>
                      </div>
                      <h4>Flexible Online Education</h4>
                      <p>
                        Study anytime, anywhere with easy access to interactive
                        online learning resources.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
