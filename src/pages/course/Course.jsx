import React from "react";
import CourseGrid from "../../components/courses/CourseGrid";
import Banner from "../../components/courses/Banner";
import CourseSidebar from "../../components/courses/CourseSidebar";
export default function Course() {
  return (
    <>
      <Banner />
      <div className="rts-course-default-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <CourseSidebar />
            <CourseGrid />
          </div>
        </div>
      </div>
    </>
  );
}
