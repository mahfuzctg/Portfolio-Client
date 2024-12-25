import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: () => ({}), // Empty for now; endpoints will be added in services
});

export const { reducer: baseApiReducer, middleware: baseApiMiddleware } =
  baseApi;
