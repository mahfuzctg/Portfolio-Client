/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlogCard from "../../../components/Dashboard/Cards/BlogCard";
import CreateBlogModal from "../../../components/Dashboard/Modals/CreateBlogModal"; // Import CreateBlogModal
import UpdateBlogModal from "../../../components/Dashboard/Modals/UpdateBlogModal";
import { useGetBlogsQuery } from "../../../redux/features/blogs/blogsApi";

const BlogPage: React.FC = () => {
  const { data, isLoading, isError, error } = useGetBlogsQuery(undefined);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Add state for the create modal
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  // Sync local state with fetched data
  useEffect(() => {
    if (data?.data) {
      setBlogs(data.data);
    }
  }, [data]);

  const handleEdit = (blog: any) => {
    setSelectedBlog(blog);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteSuccess = (blogId: string) => {
    // Optimistically remove the blog from the list
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
    toast.success("Blog deleted successfully!");
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedBlog(null);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleUpdateSuccess = (updatedBlog: any) => {
    // Optimistically update the blog in the local state
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === updatedBlog._id ? updatedBlog : blog
      )
    );
    toast.success("Blog updated successfully!");
    closeUpdateModal();
  };

  const handleCreateSuccess = (newBlog: any) => {
    // Add newly created blog to the list
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    toast.success("Blog created successfully!");
    closeCreateModal();
  };

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

  return (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Latest Blogs
        </h2>

        {/* Create New Blog Button */}
        <div className="text-center mb-6">
          <button
            className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
            onClick={() => setIsCreateModalOpen(true)} // Open the Create Blog modal
          >
            Create New Blog
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onEdit={handleEdit}
              onDeleteSuccess={() => handleDeleteSuccess(blog._id)}
            />
          ))}
        </div>
      </div>

      {/* Update Blog Modal */}
      {isUpdateModalOpen && (
        <UpdateBlogModal
          blog={selectedBlog}
          isOpen={isUpdateModalOpen}
          onClose={closeUpdateModal}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}

      {/* Create Blog Modal */}
      {isCreateModalOpen && (
        <CreateBlogModal
          isOpen={isCreateModalOpen}
          onClose={closeCreateModal}
          onCreateSuccess={handleCreateSuccess}
        />
      )}
    </section>
  );
};

export default BlogPage;
