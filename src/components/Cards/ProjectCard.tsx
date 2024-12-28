import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "../../types/project.type";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>

        {/* Read More Button */}
        <button className="mt-2 inline-flex items-center self-start text-sm text-pink-600 hover:text-pink-500">
          Read More
          <FaArrowRight className="ml-1" />
        </button>
      </div>

      {/* Links */}
      <div className="flex items-center justify-around p-4 border-t bg-gray-50">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 text-sm bg-pink-600 text-white rounded-md hover:bg-pink-500 transition"
        >
          <FaExternalLinkAlt className="mr-1" />
          Live
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-pink-100 hover:text-pink-600 transition"
        >
          <FaGithub className="mr-1" />
          Client
        </a>
        <a
          href={project.githubServer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-pink-100 hover:text-pink-600 transition"
        >
          <FaGithub className="mr-1" />
          Server
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
