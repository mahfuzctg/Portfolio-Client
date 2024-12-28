import { baseApi } from "../../api/baseApi";

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all blogs
    getBlogs: builder.query({
      query: () => "/blogs",
    }),

    // Fetch a single blog by ID
    getBlogById: builder.query({
      query: (id: string) => `/blogs/${id}`,
    }),

    // Create a new blog
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs/create",
        method: "POST",
        body: newBlog,
      }),
    }),

    // Update an existing blog by ID
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: updatedBlog,
      }),
    }),

    // Delete a blog by ID
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
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
