/* eslint-disable @typescript-eslint/no-explicit-any */
// UpdateBlogModal.tsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdateBlogMutation } from "../../../redux/features/blogs/blogsApi";

interface UpdateBlogModalProps {
  blog: any;
  isOpen: boolean;
  onClose: () => void;
  onUpdateSuccess: (updatedBlog: any) => void;
}

const UpdateBlogModal: React.FC<UpdateBlogModalProps> = ({
  blog,
  isOpen,
  onClose,
  onUpdateSuccess,
}) => {
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    link: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });

  // Populate form fields with the current blog data
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        content: blog.content || "",
        author: blog.author || "",
        category: blog.category || "",
        link: blog.link || "",
        image: blog.image || "",
        createdAt: blog.createdAt || "",
        updatedAt: blog.updatedAt || "",
      });
    }
  }, [blog]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const updatedBlog = await updateBlog({
        id: blog._id,
        updatedBlog: formData,
      }).unwrap();
      toast.success("Blog updated successfully!");
      onUpdateSuccess(updatedBlog); // Update parent state with the new blog data
      onClose(); // Close the modal
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update blog.");
    }
  };

  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Update Blog</h2>

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
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          placeholder="Author"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />

        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          placeholder="Blog Link"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />

        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled={isLoading}
        />

        <input
          type="text"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleInputChange}
          placeholder="Created At"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled
        />

        <input
          type="text"
          name="updatedAt"
          value={formData.updatedAt}
          onChange={handleInputChange}
          placeholder="Updated At"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          disabled
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
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogModal;
