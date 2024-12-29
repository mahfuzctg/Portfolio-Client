import React from "react";

interface CourseCardProps {
  id: number;
  image: string | undefined;
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          View Course
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
