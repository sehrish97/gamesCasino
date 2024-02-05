import { toast } from "react-toastify";
import { apiSlice } from "../apiSlice";

export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @desc    Create a new company
    // @route   POST /api/v1/companies
    createServices: builder.mutation({
      query: (data) => ({
        url: "/api/v1/services/",
        method: "POST",
        body: {
          title: data.title,
          isActive:data.isActive
        },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success("Services Successfully Created");
          return data;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags: ["Services"],
    }),

    // @desc    Get all companies
    // @route   GET /api/v1/leadSource
    getAllServices: builder.query({
      query: () => ({
        url: "api/v1/services",
      }),
      providesTags: ["Services"],
    }),

    // @desc    Get single company
    // @route   GET /api/v1/companies/:id
    // getCompanyById: builder.query({
    //   query:(companyId)=>({
    //     url:`api/v1/companies/${companyId}`
    //   }),
    //   providesTags:["Company"]
    // }),

    // @desc    Update company
    // @route   PATCH /api/v1/companies/:id
    // updateCompany: builder.mutation({
    //   query:({companyId, data})=>({
    //     url:`api/v1/companies/${companyId}`,
    //     method:"PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags:["Company"]
    // }),

    // @desc    Delete company
    // @route   DELETE /api/v1/companies/:id
    // deleteCompany : builder.mutation({
    //   query:({companyId})=>({
    //     url:`api/v1/companies/${companyId}`,
    //     method:"DELETE"
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       toast.warn("Company Successfully Deleted");
    //       return data;
    //     } catch (error) {
    //       toast.error(error.error.data.message);
    //     }
    //   },
    //   invalidatesTags:["Company"]
    // })
  }),

  overrideExisting: true,
});

export const { useCreateServicesMutation, useGetAllServicesQuery  } = servicesApiSlice;
