import React, { useState } from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 className="w-12 h-12 text-orange-600" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: <SiBootstrap className="w-12 h-12 text-purple-500" />,
    },
    {
      id: 4,
      name: "JavaScript",
      icon: <FaJs className="w-12 h-12 text-yellow-500" />,
    },
    {
      id: 5,
      name: "TypeScript",
      icon: <SiTypescript className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 6,
      name: "React",
      icon: <FaReact className="w-12 h-12 text-cyan-400" />,
    },
    {
      id: 7,
      name: "GitHub",
      icon: <FaGithub className="w-12 h-12 text-gray-800" />,
    },
    {
      id: 8,
      name: "Node.js",
      icon: <FaNodeJs className="w-12 h-12 text-green-600" />,
    },
    {
      id: 9,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-12 h-12 text-sky-400" />,
    },
  ];

  const courses = [
    {
      id: 1,
      title: "React Development",
      description:
        "Learn React from scratch, including hooks and advanced concepts.",
      image: "https://via.placeholder.com/200",
      link: "#",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description:
        "A comprehensive course covering HTML, CSS, JavaScript, and more.",
      image: "https://via.placeholder.com/200",
      link: "#",
    },
    {
      id: 3,
      title: "TypeScript for Beginners",
      description: "Master TypeScript and how it enhances JavaScript.",
      image: "https://via.placeholder.com/200",
      link: "#",
    },
  ];

  const education = [
    {
      id: 1,
      school: "XYZ University",
      degree: "Bachelor of Computer Science",
      year: "2018-2022",
      image: "https://via.placeholder.com/200",
      description: "Specialized in Software Engineering and Development.",
    },
    {
      id: 2,
      school: "ABC College",
      degree: "High School Diploma",
      year: "2016-2018",
      image: "https://via.placeholder.com/200",
      description: "Graduated with honors in Science and Technology.",
    },
  ];

  return (
    <section className="py-16  px-6 bg-gray-50">
      <div>
        {/* Tab Navigation */}
        <div className="fixed  left-1/2 transform -translate-x-1/2  bg-white shadow-md ">
          <div className="flex justify-center gap-8 ">
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "technical" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} rounded-l-lg`}
              onClick={() => setActiveTab("technical")}
            >
              Technical Skills
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "courses" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "education" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} rounded-r-lg`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>
        </div>
        <br />
        {/* Tab Content */}
        <div className="transition-all duration-300 ease-in-out mt-20">
          {/* Technical Skills Tab */}
          {activeTab === "technical" && (
            <div className="w-full mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {skill.icon}
                  <span className="mt-3 text-gray-700 font-semibold">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === "courses" && (
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <a
                      href={course.link}
                      className="mt-4 inline-block text-pink-600 font-semibold hover:text-pink-500"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {edu.school}
                    </h3>
                    <p className="text-gray-600 mt-2">{edu.degree}</p>
                    <p className="text-gray-500 mt-2">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
