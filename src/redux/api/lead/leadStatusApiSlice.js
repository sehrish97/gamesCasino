import { toast } from "react-toastify";
import { apiSlice } from "../apiSlice";

export const leadStatusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // @desc    Create a new company
    // @route   POST /api/v1/companies
    createLeadStatus: builder.mutation({
      query: (data) => ({
        url: "/api/v1/leadStatus/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success("LeadStatus Successfully Created");
          return data;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags:["LeadStatus"]
    }),


    // @desc    Get all companies
    // @route   GET /api/v1/leadSource
    getAllLeadSource: builder.query({
      query: () => ({
        url: "api/v1/leadStatus",
      }),
      providesTags:["LeadStatus"]
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
    updateLeadStatus: builder.mutation({
      query:({leadStatusId, data})=>({
        url:`api/v1/leadStatus/${leadStatusId}`,
        method:"PATCH",
        body: data,
      }),
      invalidatesTags:["LeadStatus"]
    }),


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

export const { useCreateLeadSourceMutation , useGetAllLeadSourceQuery } = leadStatusApiSlice;
