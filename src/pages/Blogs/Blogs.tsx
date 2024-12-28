/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BlogCard from "../../components/Blogs/BlogCard";
import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";

const Blogs: React.FC = () => {
  const { data, isLoading, isError, error } = useGetBlogsQuery();

  if (isLoading) {
    return <div className="text-center py-12">Loading blogs...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-12">
        Failed to fetch blogs. Please try again later.
        <p>
          {(error as any)?.data?.message || "An unexpected error occurred."}
        </p>
      </div>
    );
  }

  const blogPosts = data?.data || [];

  return (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(
            (blog: {
              _id: any;
              title?: string;
              content?: string;
              image?: string | undefined;
              category?: string | undefined;
              createdAt?: string;
              link?: string | undefined;
            }) => (
              <BlogCard key={blog._id} blog={blog} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
