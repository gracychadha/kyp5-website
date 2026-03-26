import React from "react";
import Banner from "../../components/about/Banner";
import AboutSection from "../../components/about/AboutSection";
import Instructor from "../../components/common/Instructor";
import Feedback from "../../components/home/Feedback";
import BlogSection from "../../components/home/BlogSection";
import WhyChooseUs from "../../components/home/WhyChooseUs";
export default function AboutUs() {
  return (
    <>
      <Banner />
      <AboutSection />
      <WhyChooseUs />
      <Instructor />
      <Feedback />
      <BlogSection />
    </>
  );
}
