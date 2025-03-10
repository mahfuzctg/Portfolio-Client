import React, { useState } from "react";
import { Project } from "../../../types/project.type";

interface UpdateModalProps {
  project: Project;
  onClose: () => void;
  onSuccess: (updatedProject: Project) => void;
}

const UpdateProjectModal: React.FC<UpdateModalProps> = ({
  project,
  onClose,
  onSuccess,
}) => {
  const [updatedProject, setUpdatedProject] = useState(project);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedProject({ ...updatedProject, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(updatedProject);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div
        className="bg-white w-full max-w-md h-[70%] overflow-y-auto p-6 rounded-lg shadow-lg relative animate-scroll"
        style={{
          animation: "scrollFromTop 0.5s ease-in-out",
        }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Update Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedProject.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter project title"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={updatedProject.image}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter image URL"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={updatedProject.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter category"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={updatedProject.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter description"
              rows={3}
            ></textarea>
          </div>

          {/* Link */}
          <div>
            <label
              htmlFor="link"
              className="block text-sm font-semibold text-gray-700"
            >
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={updatedProject.link}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter project link"
            />
          </div>

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-semibold text-gray-700"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={updatedProject.details}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1"
              placeholder="Enter project details"
              rows={4}
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectModal;
