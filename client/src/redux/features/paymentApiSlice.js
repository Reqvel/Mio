import { apiSlice } from "../services/apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getSubscriptionOptions: builder.query({
      query: () => ({
        url: '/subscriptions/products/',
        method: 'GET',
      }),
    }),

  })
})

export const { useGetSubscriptionOptionsQuery } = paymentApiSlice