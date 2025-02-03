import React, { useState } from "react";

const BlogContentPopup = ({ onClose, onSave, blogId }) => {
  const [sections, setSections] = useState([
    { heading: "", paragraph: "", isMandatory: true },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  // Add a new heading + paragraph section
  const handleAddSection = () => {
    setSections([...sections, { heading: "", paragraph: "", isMandatory: false }]);
  };

  // Remove a section (not allowed for the first mandatory section)
  const handleRemoveSection = (index) => {
    if (sections.length === 1) return; // Prevent removing the last section
    setSections(sections.filter((_, i) => i !== index));
  };

  // Save function with validation
  const handleSave = async () => {
    if (!blogId) {
      setError("Invalid blogId.");
      return;
    }

    // Ensure at least one section has content
    if (!sections[0].paragraph.trim()) {
      setError("The first paragraph is mandatory.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setError("");

    try {
      await onSave(sections, blogId);
      setSuccessMessage("Content saved successfully!");
      setTimeout(() => {
        if (typeof onClose === "function") onClose();
      }, 1000);
    } catch (error) {
      setError("Failed to save sections");
      console.error("Error in saving sections:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-[40rem] relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => onClose && onClose()}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Add Blog Summary</h2>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <label className="block text-sm font-medium mb-2">
              {index === 0 ? "Mandatory Heading" : `Heading ${index + 1}`}
            </label>
            <input
              type="text"
              value={section.heading}
              onChange={(e) => handleInputChange(index, "heading", e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder={`Enter heading ${index + 1}`}
            />

            <label className="block text-sm font-medium mt-4 mb-2">
              {index === 0 ? "Mandatory Paragraph" : `Paragraph ${index + 1}`}
            </label>
            <textarea
              value={section.paragraph}
              onChange={(e) => handleInputChange(index, "paragraph", e.target.value)}
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder={`Enter paragraph for heading ${index + 1}`}
            />

            {index !== 0 && (
              <button
                onClick={() => handleRemoveSection(index)}
                className="mt-2 text-red-500 hover:text-red-700 text-sm"
              >
                Remove Section
              </button>
            )}
          </div>
        ))}

        <button
          onClick={handleAddSection}
          className="w-full bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 mb-4"
        >
          + Add Heading
        </button>

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