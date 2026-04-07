import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function BlogGrid() {
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
        <div className="container ">
          <div className="row g-5 mt--20">
            {blogs.map((blog) => (
              <div className="col-lg-6">
                <div className="single-blog-style-one">
                  <a href={`/our-blogs/${blog.id}`} className="thumbnail">
                    <img
                      src={
                        blog?.thumbnail
                          ? import.meta.env.VITE_BASE_URL.replace("/api/public/", "") +
                            blog.thumbnail
                          : "/assets/images/blog/01.jpg"
                      }
                      alt={blog?.title}
                    />
                  </a>
                  <div className="blog-top-area">
                    <div className="single">
                      <i className="fa-light fa-calendar-days" />
                      <p>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="single">
                      <i className="fa-light fa-user" />
                      <p>{blog.author}</p>
                    </div>
                  </div>
                  <Link to={`/our-blogs/${blog.id}`}>
                    <h5 className="title">{blog.title}</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogGrid;
