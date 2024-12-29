import React from "react";

interface EducationCardProps {
  title: string;
  institution: string;
  degree?: string;
  description: string;
  link: string;
  image?: string;
  year?: number | string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  institution,
  degree,
  description,
  link,
  image,
  year,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white border-l-8 border-pink-500 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 w-full max-w-4xl mx-auto my-6">
      {/* Image Section */}
      {image && (
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden border-4 border-gray-300 shadow-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Text Content Section */}
      <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-lg text-gray-600 mt-2 font-medium">{institution}</p>
        {degree && (
          <p className="text-md text-gray-500 mt-1 italic">{degree}</p>
        )}
        {year && <p className="text-sm text-gray-700 mt-1">Year: {year}</p>}
        <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-pink-500 hover:text-pink-700 text-lg font-semibold transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default EducationCard;
