import React from "react";

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
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
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
          <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col flex-grow space-y-2">
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
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
        <a
          href={blog.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-pink-600 hover:text-pink-500 text-[9px] font-medium transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-2.5 h-2.5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
