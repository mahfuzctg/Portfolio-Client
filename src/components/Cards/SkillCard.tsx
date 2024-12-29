import React from "react";

interface SkillCardProps {
  id: number | string;
  skillName: string;
  image: string | undefined;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, image }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mx-auto">
        {/* Image - circular with border, and smooth zoom effect on hover */}
        <div className="flex justify-center items-center mb-4 p-6">
          <img
            src={image}
            alt={skillName}
            className="w-20 h-20 object-cover rounded-full border-4 border-white transform transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Skill Name - hidden by default, shown on hover */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white tracking-wider">
            {skillName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
