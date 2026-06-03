import React, { useEffect, useState } from "react";
import axios from "axios";

function WhyChooseUs() {
  const [chooseUsContent, setChooseUsContent] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");
  const defaultChooseUsContent = {
    title: "Why Choose Us",
    subtitle: "Empowering Students for a Successful Future",
    description:
      "We provide comprehensive guidance, skill development, and personalized support to help students achieve their academic and career goals.",
    image1: "/assets/images/why-choose/03.jpg",
    image2: "/assets/images/why-choose/02.jpg",
    keyPoints: [
      { text: "Expert Career Guidance" },
      { text: "Personalized Learning Approach" },
      { text: "Industry-Relevant Skill Development" },
      { text: "Proven Success & Student Satisfaction" },
    ],
  };
  useEffect(() => {
    const fetchChooseUs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}settings/site-config`,
        );

        setChooseUsContent(
          res.data?.data?.whyChooseUs || defaultChooseUsContent,
        );
      } catch (error) {
        console.error("Error fetching why choose us data:", error);
        setChooseUsContent(defaultChooseUsContent);
      }
    };

    fetchChooseUs();
  }, []);

  const content = chooseUsContent || defaultChooseUsContent;
  return (
    <div className="why-choose-us bg-blue bg-choose-us-one bg_image rts-section-gap shape-move">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="why-choose-us-area-image pb--50">
              <img
                className="one"
                src={
                  chooseUsContent?.image1?.startsWith("/")
                    ? `${BASE_URL}${chooseUsContent?.image1}`
                    : defaultChooseUsContent.image1
                }
                alt="why choose"
              />

              <div className="border-img">
                <img
                  className="two ml--20"
                  src={
                    chooseUsContent?.image2?.startsWith("/")
                      ? `${BASE_URL}${chooseUsContent?.image2}`
                      : defaultChooseUsContent.image2
                  }
                  alt="why choose"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 pl--90 pl_md--15 mt_md--50 pl_sm--15 pt_sm--50">
            <div className="title-area-left-style">
              <div className="pre-title">
                <img src="/assets/images/banner/bulb-2.png" alt="icon" />
                <span>{chooseUsContent?.title}</span>
              </div>

              <h2 className="title">{chooseUsContent?.subtitle}</h2>

              <p className="post-title">{chooseUsContent?.description}</p>
            </div>

            {/* KEY POINTS */}
            <div className="why-choose-main-wrapper-1">
              {chooseUsContent?.keyPoints?.map((item, index) => (
                <div className="single-choose-reason-1" key={index}>
                  <h6 className="title">{item.text}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
