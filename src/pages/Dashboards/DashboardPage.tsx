import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  const authToken = localStorage.getItem("authToken");

  // If no token found, redirect to the login page
  if (!authToken) {
    navigate("/login");
    return null; // Return nothing while redirecting
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-4 space-y-6">
        <div className="text-xl font-semibold">Dashboard</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/home"
                className="block text-white hover:bg-blue-700 p-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block text-white hover:bg-blue-700 p-2 rounded-md"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block text-white hover:bg-blue-700 p-2 rounded-md"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block text-white hover:bg-blue-700 p-2 rounded-md"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Welcome to Your Dashboard
        </h2>

        {/* Dashboard Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-4xl font-bold text-blue-600">1,200</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Active Sessions
            </h3>
            <p className="text-4xl font-bold text-green-600">45</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              New Messages
            </h3>
            <p className="text-4xl font-bold text-red-600">3</p>
          </div>
        </div>

        {/* Additional Content (You can add charts, reports, etc.) */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700">
            Activity Overview
          </h3>
          <p className="text-gray-600">
            Graph or activity chart can be placed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
