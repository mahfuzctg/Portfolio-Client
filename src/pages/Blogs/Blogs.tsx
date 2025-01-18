/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import BlogCard from "../../components/Cards/BlogCard";
import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";

const BlogPage: React.FC = () => {
  const { data, isLoading, isError, error } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return (
      <div className="text-center py-12 text-[#F4F6FF]">Loading blogs...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-12">
        Failed to fetch blogs. Please try again later.
        <p className="text-[#F4F6FF]">
          {(error as any)?.data?.message || "An unexpected error occurred."}
        </p>
      </div>
    );
  }

  const blogPosts = data?.data || [];

  return (
    <section className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white text-center mb-12 animate__animated animate__fadeIn">
          My Blogs
        </h2>
        {/* Adjust grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto w-[85%] ">
          {blogPosts.map(
            (blog: {
              _id: string;
              title?: string;
              content?: string;
              author: string;
              image?: string;
              category?: string;
              createdAt?: string;
              link?: string;
            }) => (
              <BlogCard
                key={blog._id}
                blog={{
                  ...blog,
                  title: blog.title || "Untitled Blog", // Fallback to a default title
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
