import React, { useState } from "react";
import CourseCard from "../../components/Cards/CourseCard";
import EducationCard from "../../components/Cards/EducationCard";
import SkillCard from "../../components/Cards/SkillCard";
import { useGetCoursesQuery } from "../../redux/features/courses/course.Api";
import { useGetEducationsQuery } from "../../redux/features/educations/education.Api";
import { useGetSkillsQuery } from "../../redux/features/skills/skill.Api";

interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  certificate: string;
  batch: string;
  duration: string;
  instructor: string;
  createdAt: string;
  updatedAt: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  description: string;
  image?: string;
}

interface Skill {
  image?: string;
  id: string;
  name?: string;
}

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "skills" | "courses" | "education"
  >("skills");

  const {
    data: skillsData,
    isLoading: skillsLoading,
    isError: skillsError,
  } = useGetSkillsQuery(undefined);
  const {
    data: coursesData,
    isLoading: coursesLoading,
    isError: coursesError,
  } = useGetCoursesQuery(undefined);
  const {
    data: educationsData,
    isLoading: educationLoading,
    isError: educationError,
  } = useGetEducationsQuery(undefined);

  // Handle the data properly
  const skills: Skill[] = skillsData?.data || [];
  const courses: Course[] = coursesData?.data || [];
  const educations: Education[] = educationsData?.data || [];

  return (
    <section className="py-16 bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C]">
      <div>
        {/* Tab Navigation */}
        <div className="flex justify-center mx-auto gap-4 sm:gap-8 mb-8 sm:mb-16">
          <button
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "skills"
                ? "bg-[#12325A] text-white"
                : "bg-[#181625] text-white"
            } rounded-lg transition-all duration-300`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "courses"
                ? "bg-[#12325A] text-white"
                : "bg-[#181625] text-white"
            } rounded-lg transition-all duration-300`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "education"
                ? "bg-[#12325A] text-white"
                : "bg-[#181625] text-white"
            } rounded-lg transition-all duration-300`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Content for Active Tab */}
        <div>
          {activeTab === "skills" && (
            <div className="grid grid-cols-2 w-9/12 mx-auto sm:grid-cols-2 lg:grid-cols-8 gap-2">
              {skillsLoading ? (
                <p className="text-[#F4F6FF]">Loading skills...</p>
              ) : skillsError ? (
                <p className="text-[#F4F6FF]">Error loading skills</p>
              ) : (
                skills.map((skill: Skill) => (
                  <SkillCard
                    key={skill.id}
                    skillName={skill.name}
                    image={skill.image || "default-image.jpg"}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === "courses" && (
            <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {coursesLoading ? (
                <p className="text-[#F4F6FF]">Loading courses...</p>
              ) : coursesError ? (
                <p className="text-[#F4F6FF]">Error loading courses</p>
              ) : (
                courses.map((course: Course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    link={course.link}
                    certificate={course.certificate}
                    batch={course.batch}
                    duration={course.duration}
                    instructor={course.instructor}
                    createdAt={course.createdAt}
                    updatedAt={course.updatedAt}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {educationLoading ? (
                <p className="text-[#F4F6FF]">Loading education...</p>
              ) : educationError ? (
                <p className="text-[#F4F6FF]">Error loading education</p>
              ) : (
                educations.map((edu: Education) => (
                  <EducationCard
                    key={edu.id}
                    id={edu.id}
                    image={edu.image}
                    school={edu.school}
                    degree={edu.degree}
                    year={edu.year}
                    description={edu.description}
                    title={""}
                    institution={""}
                    link={""}
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

export default Portfolio;
