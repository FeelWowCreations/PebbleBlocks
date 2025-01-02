import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the CMS
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://your-cms-api.com/blogs");
        const data = await response.json();
        setBlogs(data); // Assuming data is an array of blog posts
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
        {blogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-lg shadow-lg overflow-hidden bg-white"
              >
                <img
                  src={blog.photo}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  {blog.headings.map((heading, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-medium text-blue-600 mb-2">
                        {heading.headingTitle}
                      </h3>
                      <p className="text-gray-700">{heading.paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
