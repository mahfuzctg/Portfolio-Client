import { useState } from "react";
import CourseCard from "../../components/Cards/CourseCard";
import EducationCard from "../../components/Cards/EducationCard";
import SkillCard from "../../components/Cards/SkillCard";
import { useGetCoursesQuery } from "../../redux/features/courses/course.Api";
import { useGetEducationsQuery } from "../../redux/features/educations/education.Api";
import { useGetSkillsQuery } from "../../redux/features/skills/skill.Api";

interface Skill {
  id: string;
  name: string;
  level: string;
  description: string;
  image?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  description: string;
  image?: string;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const {
    data: skills,
    isLoading: skillsLoading,
    isError: skillsError,
  } = useGetSkillsQuery(undefined);
  const {
    data: courses,
    isLoading: coursesLoading,
    isError: coursesError,
  } = useGetCoursesQuery(undefined);
  const {
    data: educations,
    isLoading: educationLoading,
    isError: educationError,
  } = useGetEducationsQuery(undefined);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {/* Large Screens Tabs */}
          <div className="hidden sm:flex gap-8">
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "skills" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} rounded-full transition duration-300`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "courses" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} rounded-full transition duration-300`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold ${activeTab === "education" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} rounded-full transition duration-300`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* Small Screens Tab Dropdown */}
          <div className="sm:hidden w-full">
            <select
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="skills">Skills</option>
              <option value="courses">Courses</option>
              <option value="education">Education</option>
            </select>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {skillsLoading ? (
                <p>Loading skills...</p>
              ) : skillsError ? (
                <p>Error loading skills</p>
              ) : (
                skills?.map((skill: Skill) => (
                  <SkillCard
                    key={skill.id}
                    id={Number(skill.id)} // Convert string to number
                    skillName={skill.name}
                    image={skill.image}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === "courses" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {coursesLoading ? (
                <p>Loading courses...</p>
              ) : coursesError ? (
                <p>Error loading courses</p>
              ) : (
                courses?.map((course: Course) => (
                  <CourseCard
                    key={course.id}
                    id={Number(course.id)} // Convert string to number
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    link={course.link}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {educationLoading ? (
                <p>Loading education...</p>
              ) : educationError ? (
                <p>Error loading education</p>
              ) : (
                educations?.map((edu: Education) => (
                  <EducationCard
                    key={edu.id}
                    id={Number(edu.id)} // Convert string to number
                    image={edu.image}
                    school={edu.school}
                    degree={edu.degree}
                    year={edu.year}
                    description={edu.description}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
