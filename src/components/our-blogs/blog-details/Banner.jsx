import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Banner() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + `blogs/${id}`)
      .then((response) => {
        setBlog(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="rts-bread-crumbarea-1  bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main-wrapper">
                <h1 className="title">Our Blogs </h1>
                {/* breadcrumb pagination area */}
                <div className="pagination-wrapper">
                  <a href="/">Home</a>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="active" href="#">
                    {blog?.title ? blog.title : "Blog Details"}
                  </a>
                </div>
                {/* breadcrumb pagination area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
