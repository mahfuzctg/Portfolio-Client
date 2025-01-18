import React from "react";

interface CourseCardProps {
  id: number | string; // Course ID (if applicable)
  image: string | undefined; // Image URL for the course
  title: string; // Course title
  description: string; // Course description
  link: string; // URL to the course page
  batch?: string; // Optional batch field for course batch
  duration?: string; // Optional duration for the course
  instructor?: string; // Optional instructor for the course
  certificate?: string; // Optional certificate link for the course
  createdAt?: string; // Creation date of the course
  updatedAt?: string; // Last updated date of the course
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  link,
  batch,
  duration,
  instructor,
  certificate,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-9/12 mx-auto h-full">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/400"} // Default image if none provided
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/400"; // Fallback image
          }}
        />
      </div>

      {/* Course Content */}
      <div className="p-4 flex flex-col flex-grow space-y-4 text-[#F4F6FF]">
        <h3 className="font-semibold text-[#F4F6FF] group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#F4F6FF]">{description}</p>

        {/* Additional Info */}
        <div className="text-xs text-[#F4F6FF] space-y-2">
          {batch && (
            <p>
              <strong>Batch:</strong> {batch}
            </p>
          )}
          {duration && (
            <p>
              <strong>Duration:</strong> {duration}
            </p>
          )}
          {instructor && (
            <p>
              <strong>Instructor:</strong> {instructor}
            </p>
          )}
        </div>
      </div>

      {/* Footer Section with Course Link and Certificate (Fixed Position) */}
      <div className="flex  justify-between p-3 bg-[#211951] border-t border-[#10375C] mt-auto">
        {/* Course Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#F4F6FF] hover:text-gray-200 text-xs font-medium transition mb-2"
        >
          View Course
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-2.5 h-2.5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        {/* Certificate Section (if applicable) */}
        {certificate && (
          <div className="text-[#F4F6FF] text-xs">
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
