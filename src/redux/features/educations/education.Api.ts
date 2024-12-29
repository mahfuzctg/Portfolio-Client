import { baseApi } from "../../api/baseApi";

// Define the educationsApi using baseApi's injectEndpoints
export const educationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all education entries
    getEducations: builder.query({
      query: () => "/educations", // matches the GET route in the backend
      providesTags: ["Education"], // Provide 'Education' tag for cache invalidation
    }),

    // Add a new education entry
    addEducation: builder.mutation({
      query: (newEducation) => ({
        url: "/educations",
        method: "POST", // matches the POST route in the backend
        body: newEducation, // sends new education data
      }),
      invalidatesTags: ["Education"], // Invalidate 'Education' tag after adding a new education entry
    }),

    // Fetch a specific education by id
    getEducation: builder.query({
      query: (id) => `/educations/${id}`, // matches the GET route for a specific education
      providesTags: (_result, _error, id) => [{ type: "Education", id }], // Provide a tag for the specific education entry
    }),

    // Update an education by id
    updateEducation: builder.mutation({
      query: ({ id, updatedEducation }) => ({
        url: `/educations/${id}`, // matches the PUT route for updating
        method: "PUT",
        body: updatedEducation, // sends updated education data
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Education", id }], // Invalidate cache for the updated education entry
    }),

    // Delete an education by id
    deleteEducation: builder.mutation({
      query: (id) => ({
        url: `/educations/${id}`, // matches the DELETE route for deleting
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "Education", id }], // Invalidate cache for the deleted education entry
    }),
  }),
});

export const {
  useGetEducationsQuery,
  useAddEducationMutation,
  useGetEducationQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationsApi;
