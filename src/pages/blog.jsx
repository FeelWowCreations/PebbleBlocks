import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "../components/blog-content";

function Blog() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default Blog;
