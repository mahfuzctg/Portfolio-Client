import { baseApi } from "../../api/baseApi";

export const coursesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all courses
    getCourses: builder.query({
      query: () => "/courses", // Matches the GET route for all courses
      providesTags: ["Course"], // Cache invalidation for course data
    }),

    // Fetch a specific course by ID
    getCourse: builder.query({
      query: (id) => `/courses/${id}`, // Matches the GET route for a specific course
      providesTags: (_result, _error, id) => [{ type: "Course", id }],
    }),

    // Add a new course
    addCourse: builder.mutation({
      query: (newCourse) => ({
        url: "/courses",
        method: "POST", // Matches the POST route for creating a new course
        body: newCourse, // Sends new course data
      }),
      // After adding a new course, refetch the list of courses
      invalidatesTags: ["Course"],
    }),

    // Update an existing course by ID
    updateCourse: builder.mutation({
      query: ({ id, updatedCourse }) => ({
        url: `/courses/${id}`, // Matches the PUT route for updating a course
        method: "PUT",
        body: updatedCourse, // Sends updated course data
      }),
      // After updating a course, refetch the specific course data
      invalidatesTags: (_result, _error, { id }) => [{ type: "Course", id }],
    }),

    // Delete a course by ID
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/courses/${id}`, // Matches the DELETE route for deleting a course
        method: "DELETE",
      }),
      // After deleting a course, refetch the list of courses
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = coursesApi;
