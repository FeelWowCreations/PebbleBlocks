import React, { useState } from "react";

const BlogContentPopup = ({ onClose, onSave }) => {
  const [imageFile, setImageFile] = useState(null);
  const [contentSections, setContentSections] = useState([
    { heading: "", paragraph: "" },
  ]);

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...contentSections];
    updatedSections[index][field] = value;
    setContentSections(updatedSections);
  };

  const addSection = () => {
    setContentSections([...contentSections, { heading: "", paragraph: "" }]);
  };

  const removeSection = (index) => {
    const updatedSections = contentSections.filter((_, i) => i !== index);
    setContentSections(updatedSections);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Prepare FormData for image and content sections
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("contentSections", JSON.stringify(contentSections));
  
    // Make the API request to save the blog content
    try {
      const response = await fetch('https://your-cms-api-url.com/api/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${"yourAccessToken"}`, // if authentication is required
        },
        body: formData, // The body is the formData which contains image and text content
      });
  
      if (!response.ok) {
        throw new Error('Failed to save blog content');
      }
  
      const data = await response.json(); // Assume the response is JSON
  
      // Notify parent component of success
      onSave(data); // Send the saved data back to the parent component (if needed)
  
      // Close the popup
      onClose();
    } catch (error) {
      console.error('Error saving blog content:', error);
      // Handle error (you can display an alert or message here)
      alert('Error saving content, please try again!');
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Blog Content</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {contentSections.map((section, index) => (
            <div key={index} className="mb-4 border p-4 rounded-lg">
              <div className="mb-2">
                <label className="block mb-2 font-medium">Heading:</label>
                <input
                  type="text"
                  value={section.heading}
                  onChange={(e) =>
                    handleSectionChange(index, "heading", e.target.value)
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 font-medium">Paragraph:</label>
                <textarea
                  value={section.paragraph}
                  onChange={(e) =>
                    handleSectionChange(index, "paragraph", e.target.value)
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              {contentSections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove Section
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add More Sections
          </button>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogContentPopup;
