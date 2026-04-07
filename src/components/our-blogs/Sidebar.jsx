import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  const [blogcategories, setBlogCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
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
  const fetchBlogs = () => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "blogs", {
        params: {
          page: page,
          limit: 10,
          search: search,
          categoryId: categoryId,
        },
      })
      .then((response) => {
        setBlogs(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [search, categoryId, page]);

  return (
    <>
      <div className="col-xl-4 col-md-12 col-sm-12 col-12 rts-sticky-column-item mt--30 mb--30">
        <div className="blog-sidebar theiaStickySidebar">
          <div className="rts-single-wized search">
            <div className="wized-body mt--0">
              <div className="rts-search-wrapper">
                <input
                  className="Search"
                  type="text"
                  placeholder="Enter Blog Title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button >
                  <i className="fal fa-search" />
                </button>
              </div>
            </div>
          </div>

          {/* blog post */}
          <div className="rts-single-wized Recent-post">
            <div className="wized-header">
              <h5 className="title">Recent Blogs</h5>
            </div>
            <div className="wized-body">
              {/* recent-post */}
              {blogs.map((blog) => (
                <div className="recent-post-single" key={blog.id}>
                  <div className="thumbnail">
                    <Link to={`/our-blogs/${blog.id}`}>
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
                    </Link>
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
              <h5 className="title">Popular Categories</h5>
            </div>
            <div className="wized-body">
              {blogcategories.map((cat) => (
                <div className="tags-wrapper mb-2" key={cat.id}>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => setCategoryId(cat.id)}
                  >
                    {cat.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
