import React from "react";

import BlogSidebar from "../../components/our-blogs/blog-details/BlogSidebar";
import BlogOverview from "../../components/our-blogs/blog-details/BlogOverview";

function BlogDetails() {
  return (
    <>
      <div className="rts-blog-list-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            {/* rts blo post area */}
            <BlogOverview />
            {/* sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
