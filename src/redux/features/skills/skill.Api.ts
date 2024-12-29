import { baseApi } from "../../api/baseApi";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all skills
    getSkills: builder.query({
      query: () => "/skills", // Matches the GET route for all skills
      providesTags: ["Skill"], // Cache invalidation for skill data
    }),

    // Fetch a specific skill by ID
    getSkill: builder.query({
      query: (id) => `/skills/${id}`, // Matches the GET route for specific skill
      providesTags: (result, error, id) => [{ type: "Skill", id }],
    }),

    // Add a new skill
    addSkill: builder.mutation({
      query: (newSkill) => ({
        url: "/skills",
        method: "POST",
        body: newSkill, // Sends new skill data
      }),
      // After adding a new skill, refetch the list of skills
      invalidatesTags: ["Skill"],
    }),

    // Update a skill by ID
    updateSkill: builder.mutation({
      query: ({ id, updatedSkill }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body: updatedSkill, // Sends updated skill data
      }),
      // Refetch the skill after updating
      invalidatesTags: (result, error, { id }) => [{ type: "Skill", id }],
    }),

    // Delete a skill by ID
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      // After deleting, refetch the list of skills
      invalidatesTags: ["Skill"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetSkillQuery,
  useAddSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillsApi;
