import { apiSlice } from "../services/apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getSubscriptionOptions: builder.query({
      query: () => ({
        url: '/subscriptions/products/',
        method: 'GET',
      }),
    }),

    getUsersSubscription: builder.query({
      query: () => ({
        url: '/account/user/',
        method: 'GET',
      }),
    }),

    getPaymentSession: builder.mutation({
      query: payload => ({
        url: '/subscriptions/payment-session/',
        method: 'POST',
        body: { ...payload }
      }),
    }),

    cancelSubscription: builder.mutation({
      query: payload => ({
        url: '/subscriptions/cancel/',
        method: 'POST',
        body: { ...payload }
      }),
    }),

  })
})

export const { useGetSubscriptionOptionsQuery,
               useGetUsersSubscriptionQuery,
               useGetPaymentSessionMutation,
               useCancelSubscriptionMutation } = paymentApiSlice