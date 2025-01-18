import React from "react";
import { MdDelete } from "react-icons/md"; // Import delete icon

interface SkillCardProps {
  id: string;
  skillName?: string;
  image: string;
  onDelete: (id: string) => void; // Callback function for deletion
}

const SkillCard: React.FC<SkillCardProps> = ({
  id,
  skillName,
  image,
  onDelete,
}) => {
  console.log("SkillCard received id:", id); // Debugging
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="relative">
        <img
          src={image}
          alt={skillName}
          className="w-full h-32 object-cover rounded-md"
        />
        <button
          onClick={() => onDelete(id)} // Trigger delete on click
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700"
        >
          <MdDelete size={24} />
        </button>
      </div>
      <h3 className="text-xl font-semibold mt-4">{skillName}</h3>
    </div>
  );
};

export default SkillCard;
