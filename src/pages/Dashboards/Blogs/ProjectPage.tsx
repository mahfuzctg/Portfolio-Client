import React, { useState } from "react";
import { toast } from "react-toastify";
import ProjectCard from "../../../components/Dashboard/Cards/ProjectCard";
import CreateProjectModal from "../../../components/Dashboard/Modals/CreateProjectModal";
import {
  useAddProjectMutation,
  useGetProjectsQuery,
} from "../../../redux/features/projects/projectsApi";
import { Project } from "../../../types/project.type";

const ProjectsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: projects, isLoading, error } = useGetProjectsQuery();
  const [addProject] = useAddProjectMutation();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddProject = async (newProject: Project) => {
    try {
      await addProject(newProject).unwrap();
      toast.success("Project added successfully!");
      handleModalToggle(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project. Please try again.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

      {/* Create Modal */}
      {isModalOpen && (
        <CreateProjectModal
          onClose={handleModalToggle}
          onSuccess={handleAddProject}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
