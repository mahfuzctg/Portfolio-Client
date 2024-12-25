import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

// Define the rotate animation
const pageVariants = {
  initial: { opacity: 0, rotate: 180 }, // Start with the element rotated 180 degrees
  animate: { opacity: 1, rotate: 0 }, // Rotate to 0 degrees (normal state)
  exit: { opacity: 0, rotate: -180 }, // Rotate out in the opposite direction
};

const rotateTransition = {
  type: "spring",
  stiffness: 70, // Lower stiffness for smoother rotation
  damping: 20, // Lower damping for a more fluid effect
  mass: 1, // Controls the weight of the animation, adding more natural movement
  duration: 1, // Increase the duration for smoother motion
};

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex overflow-x-hidden">
      {/* Left Sidebar (Navbar) */}
      <div className="fixed top-0 left-0 h-full bg-white shadow-lg z-50">
        <Navbar />
      </div>

      {/* Main content with rotation animations */}
      <div className="ml-[5%] flex-1">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.key}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={rotateTransition}
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
