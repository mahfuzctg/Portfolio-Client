import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";

import BlogPage from "../pages/Dashboards/Blogs/BlogPage";

import DashboardPage from "../pages/Dashboards/DashboardPage";
import ProjectsPage from "../pages/Dashboards/Projects/ProjectPage";
import SkillPage from "../pages/Dashboards/Skills/SkillPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound/NotFound";

import ContactPage from "../pages/Contact/ContactPage";
import Portfolio from "../pages/Portfolio/Portfolio";
import Projects from "../pages/Projects/Project";

// PrivateRoute component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Render the children if authenticated
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Define your individual routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default route for "/" */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Protected Dashboard route */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardPage /> {/* Private Dashboard page */}
            </PrivateRoute>
          }
        >
          {/* Nested Dashboard routes */}

          <Route path="project-page" element={<ProjectsPage />} />
          <Route path="blog-page" element={<BlogPage />} />
          <Route path="skill-page" element={<SkillPage />} />
        </Route>
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
