/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateBlogMutation } from "../../../redux/features/blogs/blogsApi";

interface CreateBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSuccess: (newBlog: any) => void;
}

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({
  isOpen,
  onClose,
  onCreateSuccess,
}) => {
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    profileImage: "", // Changed from author to profileImage
    category: "",
    link: "",
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const newBlog = await createBlog(formData).unwrap();
      toast.success("Blog created successfully!");
      onCreateSuccess(newBlog); // Pass the new blog to parent component
      onClose(); // Close the modal
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create blog.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create New Blog</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Blog Title"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Blog Content"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <input
          type="text"
          name="profileImage" // Changed from author to profileImage
          value={formData.profileImage}
          onChange={handleInputChange}
          placeholder="Profile Image URL"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category (Optional)"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          placeholder="Link (Optional)"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Image URL (Optional)"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
