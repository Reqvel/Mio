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

    resetPasswordViaEmail: builder.mutation({
      query: credentials => ({
        url: '/account/password-reset/via-email/',
        method: 'POST',
        body: { ...credentials },
      })
    }),

    resetPasswordInPlace: builder.mutation({
      query: credentials => ({
        url: '/account/password-reset/in-place/',
        method: 'POST',
        body: { ...credentials },
      })
    }),

    setNewPassword: builder.mutation({
      query: credentials => ({
        url: '/account/password-reset/set-new/',
        method: 'PATCH',
        body: { ...credentials },
      })
    }),

  })
})

export const { useLoginMutation, 
               useRegisterMutation,
               useResetPasswordViaEmailMutation,
               useResetPasswordInPlaceMutation,
               useSetNewPasswordMutation } = authApiSlice