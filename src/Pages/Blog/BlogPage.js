// src/BlogList.js
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import './BlogPage.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://api.yourwebsite.com/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          createdDate={blog.createdDate}
          username={blog.username}
        />
      ))}
    </div>
  );
};

export default BlogList;
