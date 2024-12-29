import React from "react";

interface EducationCardProps {
  id: number;
  image: string | undefined;
  school: string;
  degree: string;
  year: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  image,
  school,
  degree,
  year,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={school} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{school}</h3>
        <p className="text-gray-600 mt-2">{degree}</p>
        <p className="text-gray-500 mt-2">{year}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
