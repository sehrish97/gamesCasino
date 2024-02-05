import { toast } from "react-toastify";
import { apiSlice } from "../apiSlice";

export const roleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @desc    Create a new company
    // @route   POST /api/v1/companies
    createRole: builder.mutation({
      query: (data) => ({
        url: "/api/v1/roles",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success("Role Successfully Created");
          return data;
        } catch (error) {
          console.log(error);
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags: ["Role"],
    }),

    // @desc    Get all Roles
    // @route   GET /api/v1/roles
    getAllRoles: builder.query({
      query: () => ({
        url: "/api/v1/roles",
      }),
      providesTags: ["Role"],
    }),

    // @desc    Get all models
    // @route   GET /api/v1/roles/models
    getAllModels: builder.query({
      query: () => ({
        url: "/api/v1/roles/models",
      }),
      providesTags: ["Role"],
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

export const { useGetAllModelsQuery, useCreateRoleMutation, useGetAllRolesQuery } = roleApiSlice;
