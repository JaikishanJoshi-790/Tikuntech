import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, description, image, createdDate, username }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="blog-card-footer">
          <span>By {username}</span>
          <span>{new Date(createdDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
