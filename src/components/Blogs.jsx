import React, { useState, useEffect } from "react";
import BlogContentPopup from "./blog-popup";
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
  const [showContentPopup, setShowContentPopup] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    date: "",
    excerpt: "",
    imageFile: null,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;

      setBlogs(data);
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
    } else {
      // alert("Invalid credentials. Please use admin/admin.");
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

      const id = Math.floor(Math.random() * 1000000);

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
        } else {
          console.error("No data returned from insert operation");
        }

        setShowBlogForm(false);
        fetchBlogs();
      };

      reader.readAsDataURL(newBlog.imageFile);
    } catch (error) {
      console.error("Failed to add blog", error);
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

  const handleSaveContent = (content) => {
    console.log("Content saved:", content);
    setShowContentPopup(false);
  };

  const closeModal = () => {
    setShowBlogForm(false);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>

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
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={`data:image/jpeg;base64,${blog.image}`}
                alt={blog.title}
              />
              <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-500 mb-3">{blog.date}</p>
              <p className="text-gray-700 mb-5">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="text-blue-500 font-medium hover:underline"
              >
                Read more →
              </a>
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
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {showBlogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
            <form onSubmit={handleAddBlog}>
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <input
                type="date"
                placeholder="Date"
                value={newBlog.date}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, date: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <textarea
                placeholder="Excerpt"
                value={newBlog.excerpt}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, excerpt: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      )}

      {showContentPopup && (
        <BlogContentPopup
          onClose={() => setShowContentPopup(false)}
          onSave={handleSaveContent}
        />
      )}
    </section>
  );
};

export default Blogs;
