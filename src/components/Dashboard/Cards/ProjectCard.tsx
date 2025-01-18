import React, { useState } from "react";
import {
  FaArrowRight,
  FaEdit,
  FaExternalLinkAlt,
  FaGithub,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../../../redux/features/projects/projectsApi";
import { Project } from "../../../types/project.type";
import UpdateModal from "../Modals/UpdateProjectModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
  const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Delete project function
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      try {
        // Ensure the project.id (or _id) is valid
        if (!project._id) {
          throw new Error("Invalid project ID");
        }
        await deleteProject(project._id).unwrap();
        toast.success("Project deleted successfully!");
      } catch (error) {
        const errorMessage =
          (error as Error)?.message || "Failed to delete project.";
        toast.error(errorMessage);
      }
    }
  };

  // Open modal for update
  const handleUpdate = () => {
    setShowUpdateModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between max-w-xs mx-auto">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-4 space-y-3 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Read More Button */}
        <button className="mt-2 inline-flex items-center self-start text-xs text-pink-600 hover:text-pink-500">
          Read More
          <FaArrowRight className="ml-1" />
        </button>
      </div>

      {/* Links and Icons */}
      <div className="flex items-center justify-between p-3 border-t bg-gray-50 space-x-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-2 py-1 text-xs bg-pink-600 text-white rounded-md hover:bg-pink-500 transition"
        >
          <FaExternalLinkAlt className="mr-1" />
          Live
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-md hover:bg-pink-100 hover:text-pink-600 transition"
        >
          <FaGithub className="mr-1" />
          Client
        </a>
        <a
          href={project.githubServer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-md hover:bg-pink-100 hover:text-pink-600 transition"
        >
          <FaGithub className="mr-1" />
          Server
        </a>
        {/* Delete Icon */}
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="text-red-600 hover:text-red-500 p-1"
          aria-label="Delete Project"
        >
          <FaTrash />
        </button>
        {/* Update Icon */}
        <button
          onClick={handleUpdate}
          disabled={isUpdating}
          className="text-blue-600 hover:text-blue-500 p-1"
          aria-label="Update Project"
        >
          <FaEdit />
        </button>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <UpdateModal
          project={project}
          onClose={closeModal}
          onSuccess={(updatedProject: any) => {
            if (!project._id) {
              toast.error("Invalid project ID");
              return;
            }
            // Pass the correct structure
            updateProject({ id: project._id, updatedProject: updatedProject })
              .unwrap()
              .then(() => toast.success("Project updated successfully!"))
              .catch((error) => {
                const errorMessage =
                  (error as Error)?.message || "Failed to update project";
                toast.error(errorMessage);
              });
            closeModal();
          }}
        />
      )}
    </div>
  );
};

export default ProjectCard;
