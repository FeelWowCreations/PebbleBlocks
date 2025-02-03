import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom"; // Using useParams for dynamic routing
import DOMPurify from "dompurify"; // For HTML sanitization
import { Helmet } from "react-helmet"; // For SEO meta tags

const supabaseUrl = "https://hfgrqwjoickvzchorfje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZ3Jxd2pvaWNrdnpjaG9yZmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MTMwNzQsImV4cCI6MjA1MTM4OTA3NH0.bGRsLSnfpcqhZNnK_Vv5h1EATglEn628nXzF8uTxsd4";
const supabase = createClient(supabaseUrl, supabaseKey);

const BlogPage = () => {
  //const { id } = useParams(); // Get the 'id' from the URL
//   const id = 169929;
  const path = window.location.href; // Log the current URL
  const id = path.split("/")[4];
  console.log("Current URL ID:", id);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    console.log("Fetched blog with ID:", id); // Check the value of ID here

    // If ID is undefined, that’s an issue; check the route setup
    if (!id) {
      setError("Blog ID is missing from URL.");
      setLoading(false);
      return;
    }

    // Fetch blog details based on the 'id'
    const fetchBlogDetail = async () => {
      try {
        console.log("Fetching blog with ID:", id); // Log the id to check if it's correct
    
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id) // Directly use id from URL params
          .single();
    
        if (error) throw error;
    
        if (!data) {
          throw new Error("Blog not found.");
        }
    
        console.log("Fetched blog:", data);
        setBlog(data);
      } catch (error) {
        setError("Blog not found.");
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]); // Re-fetch if the 'id' changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error if there's no blog
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:image" content={`data:image/png;base64,${blog.image}`} />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>

        <div className="mt-6">
          <p className="text-gray-600 mb-4">{blog.date}</p>
          <img
            src={`data:image/png;base64,${blog.image}`}
            alt={blog.title}
            className="w-full h-72 object-cover mb-4"
          />
          <div
            className="text-gray-700 mb-6"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.summary || "No content available."),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
