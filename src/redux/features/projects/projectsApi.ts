import { baseApi } from "../../api/baseApi";

// Define types for Project and any other necessary structures
export interface Project {
  _id: string;
  id: string; // Change 'id' to '_id' based on the backend response
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  details: string;
  createdAt: string;
  updatedAt: string;
}

// Define the projectsApi using baseApi's injectEndpoints
export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all projects
    getProjects: builder.query<Project[], void>({
      query: () => "/projects", // matches the GET route in the backend
      transformResponse: (response: { success: boolean; data: Project[] }) =>
        response.data.map((project) => ({
          ...project,
          id: project._id, // Map '_id' to 'id' for the frontend usage
        })), // Transform response to match the expected structure
      providesTags: (result) => {
        // Ensure the result is an array before using .map
        if (Array.isArray(result)) {
          return [
            { type: "Project", id: "LIST" }, // Cache tag for the list of projects
            ...result.map(({ id }) => ({
              type: "Project" as const, // explicitly set type to 'Project'
              id,
            })), // Cache tag for each project
          ];
        } else {
          return []; // Return an empty array if the result is not an array
        }
      },
    }),

    // Add a new project
    addProject: builder.mutation<void, Project>({
      query: (newProject) => ({
        url: "/projects",
        method: "POST", // matches the POST route in the backend
        body: newProject, // sends new project data
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }], // Invalidate list after adding a new project
    }),

    // Fetch a specific project by id
    getProject: builder.query<Project, string>({
      query: (id) => `/projects/${id}`, // matches the GET route for a specific project
      providesTags: (_result, _error, id) => [{ type: "Project" as const, id }], // Provide a tag for the specific project
    }),

    // Update a project by id
    updateProject: builder.mutation<
      void,
      { id: string; updatedProject: Project }
    >({
      query: ({ id, updatedProject }) => ({
        url: `/projects/${id}`, // matches the PUT route for updating
        method: "PUT",
        body: updatedProject, // sends updated project data
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Project" as const, id },
        { type: "Project" as const, id: "LIST" }, // Invalidate list when updating a project
      ],
    }),

    // Delete a project by id
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `/projects/${id}`, // matches the DELETE route for deleting
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Project" as const, id },
        { type: "Project" as const, id: "LIST" }, // Invalidate list when deleting a project
      ],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApi;
