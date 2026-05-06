import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "blogs")
      .then((response) => {
        setBlogs(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="rts-section-gap rts-blog-area">
        <div className="container pb--130">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-style">
                <div className="pre-title">
                  <img src="/assets/images/banner/bulb.png" alt="icon" />
                  <span>Our Latest Blogs</span>
                </div>

                <h2 className="title">Read Our Latest Blogs</h2>

                <p className="post-title">
                  Our mission is to provide you with valuable insights
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--20">
            {/* Blog 1 */}
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 col-sm-12"   key={blog.id}>
                <div className="single-blog-style-one">
                  <a href={`/our-blogs/${blog.id}`} className="thumbnail">
                    <img
                      src={
                        blog?.thumbnail
                          ? import.meta.env.VITE_BASE_URL.replace(
                              "/api/public/",
                              "",
                            ) + blog.thumbnail
                          : "/assets/images/blog/01.jpg"
                      }
                      alt="blog"
                    />
                    {blog?.categories?.length ? (
                      blog.categories.map((cat) => (
                        <div className="tags-area"  key={cat.id}>
                          <span key={cat.id}>{cat.name}</span>
                        </div>
                      ))
                    ) : (
                       <div className="tags-area">
                          <span >  {blog?.category?.name || "Category not available"}</span>
                        </div>
                      
                    )}
                  </a>

                  <div className="blog-top-area">
                    <div className="single">
                      <i className="fa-light fa-calendar-days"></i>
                      <p>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="single">
                      <i className="fa-light fa-user"></i>
                      <p>{blog.author}</p>
                    </div>
                  </div>

                  <a href="#">
                    <h5 className="title">{blog.title}</h5>
                  </a>

                  <div className="button-area">
                    <a
                      href={`/our-blogs/${blog.id}`}
                      className="rts-btn btn-primary readmore-btn"
                    >
                      Read More
                      <i className="fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
