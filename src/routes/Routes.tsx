import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";

import BlogPage from "../pages/Dashboards/Blogs/BlogPage";
import ProjectsPage from "../pages/Dashboards/Blogs/ProjectPage";
import DashboardOverview from "../pages/Dashboards/DashboardOverview";
import DashboardPage from "../pages/Dashboards/DashboardPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound/NotFound";
import Projects from "../pages/Projects/Project";
import Skills from "../pages/Skills/Skills";

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
        <Route path="skills" element={<Skills />} />
        <Route path="blogs" element={<Blogs />} />
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
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="project-page" element={<ProjectsPage />} />
          <Route path="blog-page" element={<BlogPage />} />
        </Route>
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
