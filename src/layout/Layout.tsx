import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="my-20">
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
