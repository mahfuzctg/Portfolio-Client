// BlogCard.tsx
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useDeleteBlogMutation } from "../../../redux/features/blogs/blogsApi";

interface BlogCardProps {
  blog: {
    _id: string;
    title: string;
    content: string;
    image?: string;
    category?: string;
    createdAt: string;
    link?: string;
  };
  onEdit: (blog: any) => void;
  onDeleteSuccess: (blogId: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  onEdit,
  onDeleteSuccess,
}) => {
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(blog._id).unwrap();
        toast.success("Blog deleted successfully!");
        onDeleteSuccess(blog._id); // Update UI in real time
      } catch (error: any) {
        toast.error(error?.data?.message || "Failed to delete blog.");
      }
    }
  };

  return (
    <div
      key={blog._id}
      className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col group"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image || "https://via.placeholder.com/300x200"}
          alt={blog.title || "Blog Image"}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {blog.category && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col flex-grow space-y-2">
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors">
          {blog.title || "Untitled Blog"}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2">
          {blog.content || "No content available."}
        </p>
      </div>

      {/* Footer Section */}
      <div className="p-3 bg-gray-100 flex items-center justify-between border-t border-gray-200">
        <span className="text-[10px] text-gray-500 flex items-center">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
        <div className="flex items-center space-x-3">
          <button
            className="text-pink-600 hover:text-H transition"
            onClick={() => onEdit(blog)}
          >
            <MdEdit size={20} />
          </button>
          <button
            className="text-red-600 hover:text-red-500 transition"
            onClick={handleDelete}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
