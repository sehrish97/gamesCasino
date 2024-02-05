import { toast } from "react-toastify";
import { apiSlice } from "../apiSlice";

export const clientCategoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // @desc    Create a new company
    // @route   POST /api/v1/companies
    createClientCategory: builder.mutation({
      query: (data) => ({
        url: "api/v1/clientCategories",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success("Client Category Successfully Created");
          return data;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags:["ClientCategory"]
    }),


    // @desc    Get all companies
    // @route   GET /api/v1/companies
    getAllCompanies: builder.query({
      query: () => ({
        url: "api/v1/companies",
      }),
      providesTags:["Company"]
    }),

    
    // @desc    Get single company
    // @route   GET /api/v1/companies/:id
    getCompanyById: builder.query({
      query:(companyId)=>({
        url:`api/v1/companies/${companyId}`
      }),
      providesTags:["Company"]
    }),

    // @desc    Update company
    // @route   PATCH /api/v1/companies/:id
    updateClientCategory: builder.mutation({
      query:({companyId, data})=>({
        url:`api/v1/clientCategories/${companyId}`,
        method:"PATCH",
        body: data,
      }),
      invalidatesTags:["ClientCategory"]
    }),


    // @desc    Delete company
    // @route   DELETE /api/v1/companies/:id
    deleteClientCategory : builder.mutation({
      query:({companyId})=>({
        url:`api/v1/clientCategories/${companyId}`,
        method:"DELETE"
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.warn("Company Successfully Deleted");
          return data;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags:["Company"]
    })

  }),

  overrideExisting: true,
});

export const { useCreateClientCategoryMutation, useGetAllCompaniesQuery , useGetCompanyByIdQuery, useUpdateClientCategoryMutation ,useDeleteClientCategoryMutation} = clientCategoryApiSlice;
