import { toast } from "react-toastify";
import { apiSlice } from "../apiSlice";

export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @desc    Create a new company
    // @route   POST /api/v1/companies
    createDepartment: builder.mutation({
      query: (data) => (
        {
        url: "api/v1/departments",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success("Department Successfully Created");
          return data;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
      invalidatesTags: ["Department"],
    }),

    // @desc    Get all brands
    // @route   GET /api/v1/brands
    getAllDepartments: builder.query({
      query: () => ({
        url: "api/v1/departments",
      }),
      providesTags: ["Department"],
    
    }),

    // @desc    Get single company
    // @route   GET /api/v1/companies/:id
    // getCompanyById: builder.query({
    //   query: (companyId) => ({
    //     url: `api/v1/companies/${companyId}`,
    //   }),
    //   providesTags: ["Company"],
    // }),

    // @desc    Update company
    // @route   PATCH /api/v1/companies/:id
    // updateBrand: builder.mutation({
    //   query: ({ brandId, data }) => ({
    //     url: `api/v1/brands/${brandId}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       toast.success("Brand Successfully Updated");
    //       return data;
    //     } catch (error) {
    //       toast.error(error.error.data.message);
    //     }
    //   },
    //   invalidatesTags: ["Brand"],
    // }),

    // @desc    Delete brands
    // @route   DELETE /api/v1/brands/:id
    // deleteBrand: builder.mutation({
    //   query: ({ brandId }) => ({
    //     url: `api/v1/brands/${brandId}`,
    //     method: "DELETE",
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       toast.warn("Brand Successfully Deleted");
    //       return data;
    //     } catch (error) {
    //       toast.error(error.error.data.message);
    //     }
    //   },
    //   invalidatesTags: ["Brand"],
    // }),
  }),

  overrideExisting: true,
});

export const { useCreateDepartmentMutation, useGetAllDepartmentsQuery } = departmentApiSlice;
