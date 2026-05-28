import React from "react";
import Banner from "../../components/service-details/Banner";
import AboutSection from "../../components/service-details/AboutSection";
import WhyChoose from "../../components/service-details/WhyChoose";
import WorkProcess from "../../components/service-details/WorkProcess";

function ServiceDetails() {
  return (
    <>
      <Banner />
      <AboutSection />
      <WhyChoose />
      <WorkProcess />
    </>
  );
}

export default ServiceDetails;
