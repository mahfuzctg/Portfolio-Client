import { baseApi } from "../../api/baseApi";

export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
    addProject: builder.mutation({
      query: (newProject) => ({
        url: "/projects",
        method: "POST",
        body: newProject,
      }),
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetProjectsQuery, useAddProjectMutation } = projectsApi;
