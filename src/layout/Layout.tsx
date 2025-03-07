import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

// Define the fade-in and slide-up animation
const pageVariants = {
  initial: { opacity: 0, x: 50 }, // Start slightly lower
  animate: { opacity: 1, x: 0 }, // Move to normal position
  exit: { opacity: 0, y: 50 }, // Slide slightly up on exit
};

const smoothTransition = {
  type: "tween",
  stiffness: 80,
  damping: 15,
  duration: 0.5,
};

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex overflow-x-hidden bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C]">
      {/* Left Sidebar (Navbar) */}
      <div className="mx-auto h-full">
        <Navbar />
      </div>

      {/* Main content with smooth animations */}
      <div className="md:mx-[3%] flex-1">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.key}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={smoothTransition}
            className="h-full"
          >
            <Outlet /> {/* This renders the child routes */}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
