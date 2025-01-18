import React from "react";
import ProjectCard from "../../components/Cards/ProjectCard"; // Ensure you have this component to display individual projects
import { useGetProjectsQuery } from "../../redux/features/projects/projectsApi"; // Import your RTK Query hook
import { Project } from "../../types/project.type"; // Import the Project type for TypeScript safety

const Projects: React.FC = () => {
  // Fetching data from the API using RTK Query
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  // Loading state
  if (isLoading) return <div className="text-[#F4F6FF]">Loading...</div>;

  // Error handling
  if (error) {
    const errorMessage =
      "message" in error ? error.message : "Something went wrong";
    return <div className="text-[#F4F6FF]">Error: {errorMessage}</div>;
  }

  // Ensure the data is an array before mapping over it
  if (!Array.isArray(projects)) {
    return (
      <div className="text-[#F4F6FF]">
        Error: Data is not in the expected format
      </div>
    );
  }

  // If data is successfully fetched, map through projects and display them
  return (
    <section className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white text-center mb-12 animate__animated animate__fadeIn">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
