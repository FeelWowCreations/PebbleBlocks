import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams, useNavigate } from "react-router-dom"; // Updated import to useNavigate
import DOMPurify from "dompurify"; // For HTML sanitization
import { Helmet } from "react-helmet"; // For SEO meta tags

const supabaseUrl = "https://hfgrqwjoickvzchorfje.supabase.co";
const supabaseKey = "your-supabase-key"; // Use your actual Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

const BlogPage = () => {
  const { id } = useParams(); // Use the correct 'id' from URL
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog detail based on id
  const fetchBlogDetail = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id) // Use the correct id from the URL
        .single();

      if (error) throw error;
      setBlog(data);
    } catch (error) {
      setError("Blog not found.");
      console.error("Error fetching blog:", error);
      navigate("/"); // Redirect to homepage or a fallback page
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [id]); // Depend on id to refetch data if it changes

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  if (error) {
    return <div>{error}</div>; // Show error message if no blog found
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
