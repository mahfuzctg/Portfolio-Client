// src/pages/Projects.tsx

import React from "react";

import ProjectCard from "../../components/Cards/ProjectCard";
import { useGetProjectsQuery } from "../../redux/features/projects/projectsApi";
import { Project } from "../../types/project.type";

const Projects: React.FC = () => {
  // Fetching data from the API using RTK Query
  const { data: products, isLoading, error } = useGetProjectsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product: Project) => (
            <ProjectCard key={product.id} project={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
