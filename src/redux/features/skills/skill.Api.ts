import { baseApi } from "../../api/baseApi";

// Define types for Skill (adjust the fields according to your skill model)
export interface Skill {
  id: string; // ID from backend
  name?: string; // Required field
  image?: string; // Optional field
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T[]; // Structure for returning data from API
}

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all skills
    getSkills: builder.query<ApiResponse<Skill>, void>({
      query: () => "/skills", // Matches the GET route for all skills
      providesTags: ["Skill"], // Cache invalidation for skill data
    }),

    // Fetch a specific skill by ID
    getSkill: builder.query<Skill, string>({
      query: (id) => `/skills/${id}`, // Matches the GET route for specific skill
      providesTags: (_result, _error, id) => [{ type: "Skill", id }],
    }),

    // Add a new skill
    addSkill: builder.mutation<void, Skill>({
      query: (newSkill) => ({
        url: "/skills",
        method: "POST",
        body: newSkill, // Sends new skill data
      }),
      invalidatesTags: ["Skill"], // Invalidate cache for skills
    }),

    // Update a skill by ID
    updateSkill: builder.mutation<void, { id: string; updatedSkill: Skill }>({
      query: ({ id, updatedSkill }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body: updatedSkill, // Sends updated skill data
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Skill", id }],
    }),

    // Delete a skill by ID
    deleteSkill: builder.mutation<void, string>({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skill"], // Invalidate cache for skills
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
