import React, { useState } from "react";

const BlogContentPopup = ({ onClose, onSave, blogId }) => { 
  const [sections, setSections] = useState([
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleSave = async () => {
    if (typeof onSave !== "function") {
      console.error("onSave is not a function");
      return;
    }

    if (!blogId) {  // Validate blogId before saving
      console.error("blogId is required but not provided");
      setError("Invalid blogId.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setError("");
    try {
      // Pass the sections and blogId to the onSave function
      await onSave(sections, blogId);  // Ensure that blogId is passed correctly here
      setSuccessMessage("Content saved successfully!");
      setTimeout(() => {
        if (typeof onClose === "function") {
          onClose();
        } else {
          console.error("onClose is not a function");
        }
      }, 1000);
    } catch (error) {
      setError("Failed to save sections");
      console.error("Error in saving sections:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-12 mt-8 mb-8 rounded-lg shadow-lg lg:w-[50rem] relative overflow-auto max-h-screen">
        <button
          onClick={() => {
            if (typeof onClose === "function") {
              onClose();
            } else {
              console.error("onClose is not a function");
            }
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add Blog Summary</h2>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium mb-2">Heading {index + 1}</label>
            <input
              type="text"
              value={section.heading}
              onChange={(e) => handleInputChange(index, "heading", e.target.value)}
              className="w-full p-2 mb-2 border rounded-lg"
              placeholder={`Enter heading ${index + 1}`}
            />
            <label className="block text-sm font-medium mb-2">Paragraph {index + 1}</label>
            <textarea
              value={section.paragraph}
              onChange={(e) => handleInputChange(index, "paragraph", e.target.value)}
              className="w-full p-2 mb-2 border rounded-lg"
              rows="4"
              placeholder={`Enter paragraph for heading ${index + 1}`}
            />
          </div>
        ))}

        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Content"}
        </button>
      </div>
    </div>
  );
};

export default BlogContentPopup;
