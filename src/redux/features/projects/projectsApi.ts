import { baseApi } from "../../api/baseApi";

// Define the projectsApi using baseApi's injectEndpoints
export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all projects
    getProjects: builder.query({
      query: () => "/projects", // matches the GET route in the backend
      providesTags: ["Project"], // Provide 'Project' tag for cache invalidation
    }),

    // Add a new project
    addProject: builder.mutation({
      query: (newProject) => ({
        url: "/projects",
        method: "POST", // matches the POST route in the backend
        body: newProject, // sends new project data
      }),
      invalidatesTags: ["Project"], // Invalidate 'Project' tag after adding a new project
    }),

    // Fetch a specific project by id
    getProject: builder.query({
      query: (id) => `/projects/${id}`, // matches the GET route for a specific project
      providesTags: (_result, _error, id) => [{ type: "Project", id }], // Provide a tag for the specific project
    }),

    // Update a project by id
    updateProject: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `/projects/${id}`, // matches the PUT route for updating
        method: "PUT",
        body: updatedProject, // sends updated project data
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Project", id }], // Invalidate cache for the updated project
    }),

    // Delete a project by id
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`, // matches the DELETE route for deleting
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "Project", id }], // Invalidate cache for the deleted project
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
