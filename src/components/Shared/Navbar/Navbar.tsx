import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 h-full w-[5%] z-50 shadow-lg">
      <div className="flex flex-col justify-center items-center h-full px-6 py-4">
        {/* Mobile Menu Button */}
        <div className="flex md:hidden absolute top-4 left-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col space-y-6 my-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium hover:text-green-500 transition-colors"
                : "text-gray-700 hover:text-green-600 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium hover:text-green-500 transition-colors"
                : "text-gray-700 hover:text-green-600 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium hover:text-green-500 transition-colors"
                : "text-gray-700 hover:text-green-600 transition-colors"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium hover:text-green-500 transition-colors"
                : "text-gray-700 hover:text-green-600 transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-[5%] h-full bg-transparent shadow-lg px-6 py-4">
          <div className="space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium hover:text-green-500 transition-colors"
                  : "block text-gray-700 hover:text-green-600 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium hover:text-green-500 transition-colors"
                  : "block text-gray-700 hover:text-green-600 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium hover:text-green-500 transition-colors"
                  : "block text-gray-700 hover:text-green-600 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-medium hover:text-green-500 transition-colors"
                  : "block text-gray-700 hover:text-green-600 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
