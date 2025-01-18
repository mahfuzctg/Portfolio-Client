import { baseApi } from "../../api/baseApi";

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all blogs
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"], // Provide 'Blog' tag for cache invalidation
    }),

    // Fetch a single blog by ID
    getBlogById: builder.query({
      query: (id: string) => `/blogs/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Blog", id }], // Provide a tag for the specific blog entry
    }),

    // Create a new blog
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs/create",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blog"], // Invalidate 'Blog' tag after creating a new blog
    }),

    // Update an existing blog by ID
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: updatedBlog,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Blog", id }], // Invalidate cache for the updated blog entry
    }),

    // Delete a blog by ID
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "Blog", id }], // Invalidate cache for the deleted blog entry
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
