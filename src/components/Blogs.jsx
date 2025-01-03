import React, { useState, useEffect } from "react";
import BlogContentPopup from "./blog-popup"; // Import the child component
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hfgrqwjoickvzchorfje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZ3Jxd2pvaWNrdnpjaG9yZmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MTMwNzQsImV4cCI6MjA1MTM4OTA3NH0.bGRsLSnfpcqhZNnK_Vv5h1EATglEn628nXzF8uTxsd4";
const id = Math.floor(Math.random() * 1000000);

const supabase = createClient(supabaseUrl, supabaseKey);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [newBlog, setNewBlog] = useState({
    title: "",
    date: "",
    excerpt: "",
    imageFile: null,
  });

  const [summaryContent, setSummaryContent] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  };

  const handleOpenPopup = (id) => {
    setSelectedBlogId(id);
    console.log(setSelectedBlogId);
    setShowPopup(true);
  };

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      console.log("Pavithran",data);
      setBlogs(data);
      setFilteredBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const blogsPerPage = 6;

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username === "VelavanPebble" && password === "VelavanPebbles@123") {
      setIsAdminLoggedIn(true);
      setShowLoginPopup(false);
    }
  };

  const handleFileChange = (event) => {
    setNewBlog({ ...newBlog, imageFile: event.target.files[0] });
  };

  const handleDeleteBlog = async (id) => {
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  const handleAddBlog = async (event) => {
    event.preventDefault();
    try {
      if (
        !newBlog.title ||
        !newBlog.date ||
        !newBlog.excerpt ||
        !newBlog.imageFile
      ) {
        alert("Please fill in all fields.");
        return;
      }

      const reader = new FileReader();
      reader.onload = async () => {
        const base64Image = reader.result.split(",")[1];

        const { data, error } = await supabase.from("blogs").insert([
          {
            title: newBlog.title,
            date: newBlog.date,
            excerpt: newBlog.excerpt,
            image: base64Image,
            id: id,
          },
        ]);
        if (error) throw error;

        if (data && data.length > 0) {
          setBlogs([data[0], ...blogs]);
        }

        // After adding the blog, immediately open the popup for the summary
        setShowBlogForm(false);
        handleOpenPopup(id);
      };

      reader.readAsDataURL(newBlog.imageFile);
    } catch (error) {
      console.error("Failed to add blog", error);
    }
  };

  const handleSaveContent = async (sections, blogId) => {
    try {
      const { error } = await supabase
        .from("blogs")
        .update({ summary: sections })
        .eq("id", blogId);
      if (error) {
        throw error;
      }
      alert("Blog content saved successfully");
      fetchBlogs();
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  const closeModal = () => {
    setShowBlogForm(false);
  };

  const handleClose = () => {
    console.log('Closing popup...');
    setShowPopup(false);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const displayedBlogs = searchQuery
    ? filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
    : blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(
    (searchQuery ? filteredBlogs.length : blogs.length) / blogsPerPage
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search blogs by title"
          className="w-full mb-6 p-2 border rounded-lg"
        />

        {isAdminLoggedIn && (
          <button
            onClick={() => setShowBlogForm(true)}
            className="mb-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Blog
          </button>
        )}

        {!isAdminLoggedIn && (
          <button
            onClick={() => setShowLoginPopup(true)}
            className="mb-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Admin Login
          </button>
        )}

        <div
          className="grid gap-8 mx-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {displayedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div
                className="w-full h-48 mb-4 overflow-hidden relative"
                style={{ width: "100%", height: "200px" }}
              >
                <img
                  src={`data:image/jpeg;base64,${blog.image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-500 mb-3">{blog.date}</p>
              <p className="text-gray-700 mb-5">{blog.excerpt}</p>

              {isAdminLoggedIn && (
                <button>
                </button>
              )}

              {isAdminLoggedIn && (
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Add Blog Form */}
        {showBlogForm && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <form
              onSubmit={handleAddBlog}
              className="bg-white p-8 rounded-lg w-96"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">Add New Blog</h3>
              <input
                type="text"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                placeholder="Title"
                className="w-full p-2 border mb-4 rounded-lg"
              />
              <input
                type="date"
                value={newBlog.date}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, date: e.target.value })
                }
                placeholder="Date"
                className="w-full p-2 border mb-4 rounded-lg"
              />

              <textarea
                value={newBlog.excerpt}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, excerpt: e.target.value })
                }
                placeholder="Excerpt"
                className="w-full p-2 border mb-4 rounded-lg"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 border mb-4 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Add Blog
              </button>
            </form>
          </div>
        )}

        {/* Login Popup */}
        {showLoginPopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setShowLoginPopup(false)}
          >
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded-lg w-96"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border mb-4 rounded-lg"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border mb-4 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {/* Blog Content Popup */}
        {showPopup && (
          <BlogContentPopup
            blogId={selectedBlogId}
            supabase={supabase}
            onSave={handleSaveContent}
            onClose={handleClose}
          />
        )}
      </div>
    </section>
  );
};

export default Blogs;
