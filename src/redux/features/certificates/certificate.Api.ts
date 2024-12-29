import { baseApi } from "../../api/baseApi";

// Define the certificatesApi using baseApi's injectEndpoints
export const certificatesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all certificates
    getCertificates: builder.query({
      query: () => "/certificates", // matches the GET route in the backend
    }),

    // Add a new certificate
    addCertificate: builder.mutation({
      query: (newCertificate) => ({
        url: "/certificates", // matches the POST route in the backend
        method: "POST",
        body: newCertificate, // sends new certificate data
      }),
    }),

    // Fetch a specific certificate by id
    getCertificate: builder.query({
      query: (id) => `/certificates/${id}`, // matches the GET route for specific certificate
    }),

    // Update a certificate by id
    updateCertificate: builder.mutation({
      query: ({ id, updatedCertificate }) => ({
        url: `/certificates/${id}`, // matches the PUT route for updating
        method: "PUT",
        body: updatedCertificate, // sends updated certificate data
      }),
    }),

    // Delete a certificate by id
    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `/certificates/${id}`, // matches the DELETE route for deleting
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCertificatesQuery,
  useAddCertificateMutation,
  useGetCertificateQuery,
  useUpdateCertificateMutation,
  useDeleteCertificateMutation,
} = certificatesApi;
