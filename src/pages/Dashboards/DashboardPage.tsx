import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  const authToken = localStorage.getItem("authToken");

  // If no token found, redirect to the login page
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  if (!authToken) {
    return null; // Return nothing while redirecting
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-pink-600 text-white p-4 space-y-6">
        <div className="text-xl font-semibold">Dashboard</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard/overview"
                className="block text-white hover:bg-pink-700 p-2 rounded-md"
              >
                Overview 📝
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/blog-page"
                className="block text-white hover:bg-pink-700 p-2 rounded-md"
              >
                Blogs 📝
              </Link>
            </li>
            {/* Add more links here if needed */}
            <li>
              <Link
                to="/login"
                className="block text-white hover:bg-pink-700 p-2 rounded-md"
                onClick={() => localStorage.removeItem("authToken")}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render nested routes */}
      </div>
    </div>
  );
};

export default DashboardPage;
