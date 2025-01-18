import React from "react";

interface SkillCardProps {
  skillName?: string;
  image?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, image }) => {
  return (
    <div className="relative group  mx-auto bg-gradient-to-br from-[#151515] via-[#211951] to-[#10375C] rounded-lg overflow-hidden shadow-lg w-24 h-24  flex items-center justify-center transform transition-all duration-300 ease-in-out hover:scale-105">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={skillName}
          className="w-16 h-16  rounded-full transition-all duration-300 ease-in-out group-hover:opacity-0"
        />
      )}
      {/* Name */}
      <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {skillName}
      </h3>
    </div>
  );
};

export default SkillCard;
