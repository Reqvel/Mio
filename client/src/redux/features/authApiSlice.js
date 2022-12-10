import { apiSlice } from "../services/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    login: builder.mutation({
      query: credentials => ({
        url: '/account/login/',
        method: 'POST',
        body: { ...credentials },
      })  
    }),

    register: builder.mutation({
      query: credentials => ({
        url: '/account/register/',
        method: 'POST',
        body: { ...credentials },
      })
    }),

    resetPassword: builder.mutation({
      query: credentials => ({
        url: '/account/password-reset/',
        method: 'POST',
        body: { ...credentials },
      })
    }),


  })
})

export const { useLoginMutation, 
               useRegisterMutation,
               useResetPasswordMutation } = authApiSlice