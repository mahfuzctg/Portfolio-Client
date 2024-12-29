// baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // Backend URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken"); // Token from localStorage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Project", "Blog", "Skill", "service", "Education", "Course"],
  endpoints: () => ({}), // Empty endpoint for now, will be injected
});
