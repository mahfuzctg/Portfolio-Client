import React from "react";

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description:
        "React Hooks have transformed how developers build applications. Learn how to use them effectively to create dynamic and efficient components.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "React",
      readTime: "5 min read",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      description:
        "TypeScript is the go-to language for modern JavaScript development. Discover tips and tricks to write cleaner, more maintainable code.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "TypeScript",
      readTime: "7 min read",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Tailwind CSS: The Future of Styling",
      description:
        "Say goodbye to traditional CSS and embrace Tailwind. Learn how it can make your styling process faster and more enjoyable.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "CSS",
      readTime: "6 min read",
      readMoreLink: "#",
    },
    {
      id: 1,
      title: "Understanding React Hooks",
      description:
        "React Hooks have transformed how developers build applications. Learn how to use them effectively to create dynamic and efficient components.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "React",
      readTime: "5 min read",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      description:
        "TypeScript is the go-to language for modern JavaScript development. Discover tips and tricks to write cleaner, more maintainable code.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "TypeScript",
      readTime: "7 min read",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Tailwind CSS: The Future of Styling",
      description:
        "Say goodbye to traditional CSS and embrace Tailwind. Learn how it can make your styling process faster and more enjoyable.",
      image: "https://i.postimg.cc/pyNJcSRm/blogging-tips.jpg",
      category: "CSS",
      readTime: "6 min read",
      readMoreLink: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{blog.description}</p>
              </div>

              {/* Footer Section */}
              <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
                <span className="text-gray-500 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 11h8m-4-4v8"
                    />
                  </svg>
                  {blog.readTime}
                </span>
                <button className="flex items-center text-pink-600 hover:text-pink-500 font-semibold transition">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
