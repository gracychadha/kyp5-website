import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BlogOverview() {
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
      <div className="col-xl-8 col-md-12 col-sm-12 col-12">
        {/* single post */}
        <div className="blog-single-post-listing details mb--0">
          <div className="thumbnail">
            <img
              src={
                blog?.thumbnail
                  ? import.meta.env.VITE_BASE_URL.replace("/api/public/", "") +
                    blog.thumbnail
                  : "/assets/images/blog/01.jpg"
              }
              alt={blog?.title}
            />
          </div>
          <div className="blog-listing-content">
            <div className="user-info">
              {/* single info */}
              <div className="single">
                <i className="far fa-clock" />
                <span>
                  {" "}
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              {/* single infoe end */}
              {/* single info */}
              <div className="single">
                <i className="far fa-user-circle" />
                <span>
                  {blog.author ? blog.author : "Author not available"}
                </span>
              </div>
              {/* single infoe end */}
            </div>
            <h3 className="title animated fadeIn">
              {blog.title ? blog.title : "Title not available"}
            </h3>
            <p className="disc para-1">
              {blog.content ? blog.content : "Description not available"}
            </p>

            {/* quote area start */}
            <div className="rts-quote-area text-start reveal">
              <h5 className="title title-g">
                “{blog.excerpt ? blog.excerpt : "Quote not available"}”
              </h5>
              <p className="author-name">
                {blog.author ? blog.author : "Author not available"}
              </p>
            </div>
            {/* quote area end */}

            <div className="row  align-items-center">
              <div className="col-lg-6 col-md-12">
                {/* tags details */}
                <div className="details-tag">
                  <h6>Category:</h6>

                  {blog?.categories?.length ? (
                    blog.categories.map((cat) => (
                      <button key={cat.id}>{cat.name}</button>
                    ))
                  ) : (
                    <button>
                      {blog?.category?.name || "Category not available"}
                    </button>
                  )}
                </div>
                {/* tags details End */}
              </div>
            </div>
          </div>
        </div>
        {/* single post End*/}
      </div>
    </>
  );
}

export default BlogOverview;
