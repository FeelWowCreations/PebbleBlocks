import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "../components/blog-content"; // Import BlogPage

function Blog() {
  return (
    <Router>
      <Routes>
        {/* Define the route with the dynamic 'id' */}
        <Route path="/blog/:id" element={<BlogPage />} /> 
      </Routes>
    </Router>
  );
}

export default Blog;
