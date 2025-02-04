import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const supabaseUrl = "https://hfgrqwjoickvzchorfje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZ3Jxd2pvaWNrdnpjaG9yZmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MTMwNzQsImV4cCI6MjA1MTM4OTA3NH0.bGRsLSnfpcqhZNnK_Vv5h1EATglEn628nXzF8uTxsd4";
const supabase = createClient(supabaseUrl, supabaseKey);

const BlogPage = () => {
  const path = window.location.href;
  const id = path.split("/")[4];

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Blog ID is missing from URL.");
      setLoading(false);
      return;
    }

    const fetchBlogDetail = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("id, title, summary, image, date, meta_description, keywords")
          .eq("id", id)
          .single();

        if (error) throw error;
        if (!data) throw new Error("Blog not found.");

        console.log("Fetched blog:", data);

        // Parse summary if it's a JSON string
        if (typeof data.summary === "string") {
          try {
            data.summary = JSON.parse(data.summary);
          } catch (jsonError) {
            console.error("Error parsing summary JSON:", jsonError);
            data.summary = [];
          }
        }

        setBlog(data);
      } catch (error) {
        setError("Blog not found.");
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
          {/* Navbar Component */}
          <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{blog.title || "Blog Post"}</title>
        <meta name="description" content={blog.meta_description || "Read this amazing blog post."} />
        <meta name="keywords" content={blog.keywords || "blog, article, news"} />
        {blog.image && <meta property="og:image" content={`data:image/png;base64,${blog.image}`} />}
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>

        {/* Date */}
        <p className="text-gray-600 text-center mb-4">{blog.date}</p>

        {/* Image */}
        {blog.image && (
          <img
            src={`data:image/png;base64,${blog.image}`}
            alt={blog.title}
            className="w-full h-72 object-cover mb-4"
          />
        )}

        {/* Blog Content (Handling Summary as Array of Objects) */}
        <div className="text-gray-700 mb-6">
          {Array.isArray(blog.summary) && blog.summary.length > 0 ? (
            blog.summary.map((section, index) => (
              <div key={index} className="mb-6">
                {/* Heading */}
                {section.heading && (
                  <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
                )}

                {/* Paragraph */}
                {section.paragraph && (
                  <p className="mt-2">{section.paragraph}</p>
                )}

                {/* Optional Image */}
                {section.image && (
                  <img
                    src={section.image}
                    alt={`Section ${index + 1}`}
                    className="w-full h-64 object-cover mt-4"
                  />
                )}
              </div>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </div>
          {/* Footer Component */}
          <Footer />
    </div>
  );
};

export default BlogPage;
