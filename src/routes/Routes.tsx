import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Projects from "../pages/Projects/Project";
import Skills from "../pages/Skills/Skills";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Layout wrapper (if you have a navbar/footer structure) */}
      <Route path="/" element={<Layout />}>
        {/* Define your individual routes */}
        <Route index element={<Home />} /> {/* Default route for "/" */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="blogs" element={<Blogs />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
