import React, { useState } from "react";

const BlogPostCard = ({ title, content, imageUrl, author }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {showFullContent
              ? content
              : content
              ? `${content.substring(0, 90)}...`
              : "No content available"}
          </p>
          <p className="card-text">
            <small className="text-muted">By {author}</small>
          </p>
          {content && (
            <button className="btn btn-primary" onClick={toggleContent}>
              {showFullContent ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
