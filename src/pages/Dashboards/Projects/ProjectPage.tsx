import React, { useState } from "react";
import ProjectCard from "../../../components/Dashboard/Cards/ProjectCard";

import { useGetProjectsQuery } from "../../../redux/features/projects/projectsApi";
import { Project } from "../../../types/project.type";

const ProjectsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: projects, error } = useGetProjectsQuery(undefined);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (error) {
    const errorMessage =
      (error as { data?: { message?: string } })?.data?.message ||
      "An error occurred while fetching the projects.";
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-12">
          My Projects
        </h2>

        {/* Add New Project Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleModalToggle}
            className="px-4 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition"
          >
            Add New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
