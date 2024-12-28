import { baseApi } from "../../api/baseApi";

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    addBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs",
        method: "POST",
        body: newBlog,
      }),
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetBlogsQuery, useAddBlogMutation } = blogsApi;
