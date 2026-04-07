import React from "react";
import Banner from "../../components/our-blogs/Banner";
import BlogGrid from "../../components/our-blogs/BlogGrid";
import Sidebar from "../../components/our-blogs/Sidebar";

function Blogs() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-12 col-sm-12 col-12">
            <BlogGrid />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Blogs;
