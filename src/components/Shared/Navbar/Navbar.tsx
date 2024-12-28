import React from "react";
import {
  FaBlog,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaSignInAlt,
  FaTachometerAlt,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  // Check if the user is logged in (replace with your auth logic)
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <nav className="fixed md:left-0 md:top-0 md:h-full md:w-[5%] w-full top-0 bg-white shadow-md">
      <div className="flex md:flex-col flex-row md:justify-center justify-start items-center md:my-auto md:py-4 py-2">
        <div className="flex md:flex-col flex-row md:space-y-6 space-x-6 md:space-x-0">
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaHome className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* About Link */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaUser className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* Projects Link */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaProjectDiagram className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* Blogs Link */}
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaBlog className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* Skills Link */}
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaTools className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* Contact Link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaEnvelope className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>

          {/* Dashboard Link (Visible only for logged-in users) */}
          {isLoggedIn && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                  : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
              }
            >
              <FaTachometerAlt className="md:h-6 md:w-6 h-4 w-4" />
            </NavLink>
          )}

          {/* Login Link */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
                : "text-pink-600 hover:text-pink-600 hover:bg-pink-100 p-2 rounded-full transition-colors"
            }
          >
            <FaSignInAlt className="md:h-6 md:w-6 h-4 w-4" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
