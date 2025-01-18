import React, { useState } from "react";
import { useAddSkillMutation } from "../../../redux/features/skills/skill.Api";

interface AddSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSkillModal: React.FC<AddSkillModalProps> = ({ isOpen, onClose }) => {
  const [newSkill, setNewSkill] = useState({
    id: "", // Assuming the id is generated on the server side
    title: "", // If title is different from skillName, change accordingly
    description: "", // Add description if required
    skillName: "",
    image: "",
    createdAt: "", // You can leave this empty if it is auto-generated
    updatedAt: "", // Similarly, handle it based on your logic
  });
  const [addSkill, { isLoading, error }] = useAddSkillMutation();
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormError(null); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newSkill.skillName || !newSkill.image) {
      setFormError("Name and image are required.");
      return;
    }

    try {
      await addSkill(newSkill).unwrap();
      onClose();
    } catch (error) {
      console.error("Error adding skill", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Add New Skill
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="skillName" className="block text-gray-700">
              Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              name="skillName"
              value={newSkill.skillName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={newSkill.image}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {formError && <p className="text-red-500 text-center">{formError}</p>}
          {error && (
            <p className="text-red-500 text-center">
              Error adding skill. Please try again.
            </p>
          )}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              {isLoading ? "Adding..." : "Add Skill"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
