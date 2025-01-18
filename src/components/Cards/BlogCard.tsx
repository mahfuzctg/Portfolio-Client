import React, { useState } from "react";

interface BlogCardProps {
  blog: {
    _id: string;
    title: string;
    content?: string;
    author: string;
    image?: string;
    category?: string;
    profileImage?: string;
    createdAt?: string;
    link?: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const isContentTruncated = blog.content && blog.content.length > 150;

  return (
    <div
      key={blog._id}
      className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group max-w-xs w-full h-full"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image || "https://via.placeholder.com/300x200"}
          alt={blog.title || "Blog Image"}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Profile Image and Category Section */}
      <div className="p-1 flex flex-row justify-between items-center">
        {blog.profileImage && (
          <img
            src={blog.profileImage}
            alt="Author"
            className="w-8 h-8 rounded-full border-2 border-[#10375C]"
          />
        )}
        {blog.category && (
          <span className="text-xs bg-[#10375C] text-white px-2 py-1 rounded-full shadow-md">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-2 flex flex-col flex-grow space-y-3 text-[#F4F6FF]">
        <h3 className="font-semibold text-[#F4F6FF] group-hover:text-pink-600 transition-colors">
          {blog.title || "Untitled Blog"}
        </h3>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-full" : "max-h-32"
          }`}
        >
          <p className="text-sm text-[#F4F6FF]">
            {isExpanded
              ? blog.content || ""
              : blog.content?.slice(0, 150) || ""}
            {!isExpanded && isContentTruncated && <span>...</span>}
          </p>
        </div>
        {isContentTruncated && (
          <button
            onClick={handleReadMore}
            className="text-[#F4F6FF] hover:text-gray-200 text-sm font-medium transition"
          >
            <span> {isExpanded ? "Show Less" : "Read More"}</span>
          </button>
        )}
      </div>

      {/* Footer Section */}
      <div className="p-3 bg-[#211951] flex items-center justify-between border-t border-[#10375C]">
        <span className="text-xs text-[#F4F6FF]">
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "Unknown Date"}
        </span>
        <a
          href={blog.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#F4F6FF] hover:text-gray-200 text-xs font-medium transition"
        >
          Source Link
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
