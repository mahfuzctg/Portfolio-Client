import React from "react";
import {
  FaBlog,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTachometerAlt,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  // Check if the user is logged in (replace with your auth logic)
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto md:left-0 md:right-auto md:my-auto md:h-[95%] flex justify-center items-center">
      <div className="flex md:flex-col items-center justify-center rounded-lg">
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="Home"
        >
          <FaHome className="h-5 w-5" />
        </NavLink>

        {/* About Link */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="About"
        >
          <FaUser className="h-5 w-5" />
        </NavLink>

        {/* Projects Link */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="Projects"
        >
          <FaProjectDiagram className="h-5 w-5" />
        </NavLink>

        {/* Blogs Link */}
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="Blogs"
        >
          <FaBlog className="h-5 w-5" />
        </NavLink>

        {/* Skills Link */}
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="Skills"
        >
          <FaTools className="h-5 w-5" />
        </NavLink>

        {/* Contact Link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
              : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
          }
          title="Contact"
        >
          <FaEnvelope className="h-5 w-5" />
        </NavLink>

        {/* Dashboard Link (Visible only for logged-in users) */}
        {isLoggedIn && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#F4F6FF] bg-[#1e2a47] p-3 rounded-full hover:bg-[#314376] transition-colors"
                : "text-[#F4F6FF] hover:text-[#F4F6FF] hover:bg-[#1e2a47] p-3 rounded-full transition-colors"
            }
            title="Dashboard"
          >
            <FaTachometerAlt className="h-5 w-5" />
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
