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
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image || "https://via.placeholder.com/300x200"}
          alt={blog.title || "Blog Image"}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {blog.category && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
          {blog.title || "Untitled Blog"}
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {blog.content || "No content available."}
        </p>
      </div>

      {/* Footer Section */}
      <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
        <span className="text-gray-500 text-sm flex items-center">
          Posted on {new Date(blog.createdAt).toLocaleDateString()}
        </span>
        <a
          href={blog.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-pink-600 hover:text-pink-500 font-semibold transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
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
