import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A short description of Project One goes here. It's an amazing project!",
      image: "https://i.postimg.cc/bYTWDN6W/projects-1030x694.jpg",
      liveLink: "#",
      githubClient: "#",
      githubServer: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A short description of Project Two goes here. It's an incredible project!",
      image:
        "https://i.postimg.cc/zvtxdv6f/devixa-project-details-page-for-gutenberg-banner-vo-Toa-Sm.jpg",
      liveLink: "#",
      githubClient: "#",
      githubServer: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A short description of Project Three goes here. It's a fantastic project!",
      image:
        "https://i.postimg.cc/zvtxdv6f/devixa-project-details-page-for-gutenberg-banner-vo-Toa-Sm.jpg",
      liveLink: "#",
      githubClient: "#",
      githubServer: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
