import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex overflow-x-hidden">
      {/* Left Sidebar (Navbar) */}
      <div className=" fixed top-0 left-0 h-full bg-white shadow-lg z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <div className=" ml-[5%] p-4 lg:p-8">
        <main>
          <Outlet /> {/* This renders the child routes */}
        </main>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Layout;
