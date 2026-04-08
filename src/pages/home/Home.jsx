import React from 'react'
import Banner from "../../components/home/Banner";
import About from "../../components/home/About";
import BlogSection from "../../components/home/BlogSection";
import Brand from "../../components/home/Brand";
import Category from "../../components/home/Category";
import Course from "../../components/home/Course";
import WhyChooseUs from "../../components/home/WhyChooseUs"
import UpcomingEvents from "../../components/home/UpcomingEvents"
import FunFacts from "../../components/home/FunFacts"
import Instructor from "../../components/common/Instructor"
import Feedback from "../../components/home/Feedback"

function Home() {
  return (
    <>
    <Banner />
    <Brand />
    <About/>
    <Category />
    <Course />
    <FunFacts />
    {/* <WhyChooseUs /> */}
    <UpcomingEvents />
    
    {/* <Instructor /> */}
    <Feedback />
    <BlogSection />
    
    </>
  )
}

export default Home