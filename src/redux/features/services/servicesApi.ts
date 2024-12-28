import { baseApi } from "../../api/baseApi";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services",
    }),
    addService: builder.mutation({
      query: (newService) => ({
        url: "/services",
        method: "POST",
        body: newService,
      }),
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetServicesQuery, useAddServiceMutation } = servicesApi;
