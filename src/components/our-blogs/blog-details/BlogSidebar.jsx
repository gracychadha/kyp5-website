import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSidebar() {
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

  const [blogcategories, setBlogCategories] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "blog-categories")
      .then((response) => {
        setBlogCategories(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="col-xl-4 col-md-12 col-sm-12 col-12 rts-sticky-column-item">
        <div className="blog-sidebar theiaStickySidebar">
          <div className="rts-single-wized search">
            <div className="wized-body mt--0">
              <div className="rts-search-wrapper">
                <input
                  className="Search"
                  type="text"
                  placeholder="Enter Keyword"
                />
                <button>
                  <i className="fal fa-search" />
                </button>
              </div>
            </div>
          </div>

          {/* blog post */}
          <div className="rts-single-wized Recent-post">
            <div className="wized-header">
              <h5 className="title">Recent Posts</h5>
            </div>
            <div className="wized-body">
              {/* recent-post */}
              {blogs.map((blog) => (
                <div className="recent-post-single" key={blog.id}>
                  <div className="thumbnail">
                    <a href={`/our-blogs/${blog.id}`}>
                      <img
                        src={
                          blog?.thumbnail
                            ? import.meta.env.VITE_BASE_URL.replace(
                                "/api/public/",
                                "",
                              ) + blog.thumbnail
                            : "/assets/images/blog/01.jpg"
                        }
                        alt={blog?.title}
                      />
                    </a>
                  </div>
                  <div className="content-area text-start">
                    <div className="user">
                      <i className="fal fa-clock" />
                      <span>
                        {" "}
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <a className="post-title" href={`/our-blogs/${blog.id}`}>
                      <h6 className="title">
                        {blog.title ? blog.title : "Title not available"}
                      </h6>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* blog categories */}
          <div className="rts-single-wized">
            <div className="wized-header">
              <h5 className="title">Popular Tags</h5>
            </div>
            <div className="wized-body">
              {blogcategories.map((cat) => (
                <div className="tags-wrapper mb-2">
                  <a href="javascript:void(0)">{cat.name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSidebar;
