import { useState } from "react";
import SkillCard from "../../../components/Dashboard/Cards/SkillCard";
import AddSkillModal from "../../../components/Dashboard/Modals/AddSkillModal";
import {
  useDeleteSkillMutation,
  useGetSkillsQuery,
} from "../../../redux/features/skills/skill.Api";

const SkillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: skillsData, error, isLoading } = useGetSkillsQuery();
  const [deleteSkill, { error: deleteError }] = useDeleteSkillMutation();

  // Open and close the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle skill deletion
  const handleDelete = (id: string) => {
    deleteSkill(id);
  };

  // Handle displaying skills
  const skills = skillsData?.data || [];

  return (
    <div>
      <h1>Skills</h1>
      <button
        onClick={handleOpenModal}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add New Skill
      </button>
      <AddSkillModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Display Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {isLoading ? (
          <p>Loading skills...</p>
        ) : error ? (
          <p>Error loading skills</p>
        ) : (
          skills?.map((skill) => (
            <SkillCard
              key={skill.id} // Ensure each SkillCard has a unique key
              id={skill.id}
              skillName={skill.name}
              image={skill.image || "default-image.jpg"} // Fallback image if no image is available
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Show deletion error */}
      {deleteError && (
        <p className="text-red-500 text-center">
          Error deleting skill. Please try again.
        </p>
      )}
    </div>
  );
};

export default SkillPage;
