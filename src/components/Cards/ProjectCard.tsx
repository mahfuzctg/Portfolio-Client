/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// ProjectCard.tsx
interface ProjectCardProps {
  project: {
    id: any;
    title: string;
    description: string;
    image: string;
    clientLink?: string;
    serverLink?: string;
    link?: string;
    _id?: string;
    liveLink?: string;
    category?: string;
    details?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project.id) {
    return <div>Error: Missing project ID</div>; // Handle missing ID
  }

  return (
    <div className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      {/* Project Image */}
      <div className="overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105 image-hover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow text-[#F4F6FF]">
        <h3 className="text-2xl font-semibold text-[#F4F6FF]">
          {project.title}
        </h3>
        <p className="text-sm text-[#D1D3D8]">{project.description}</p>

        {/* Read More Button */}
        <button className="mt-2 inline-flex items-center self-start text-sm text-[#F4F6FF] hover:text-[#10375C]">
          Read More
          <FaArrowRight className="ml-1" />
        </button>
      </div>

      {/* Links */}
      <div className="flex items-center justify-around p-4 border-t bg-[#211951]">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 text-sm bg-[#10375C] text-[#F4F6FF] rounded-md hover:bg-[#211951] transition"
        >
          <FaExternalLinkAlt className="mr-1" />
          Live
        </a>
        <a
          href={project.clientLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-pink-100 hover:text-pink-600 transition"
        >
          <FaGithub className="mr-1" />
          Client
        </a>
        <a
          href={project.serverLink}
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
