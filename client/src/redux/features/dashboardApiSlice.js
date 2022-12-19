import { apiSlice } from "../services/apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getYouTubeStats: builder.mutation({
      query: payload => ({
        url: '/statistics/youtube/user/',
        method: 'POST',
        body: { ...payload }
      }),
    }),

    getUsersInfo: builder.query({
      query: () => ({
        url: '/account/user/',
        method: 'GET',
      }),
    }),
    
  })
})

export const { useGetYouTubeStatsMutation,
               useGetUsersInfoQuery,
               useLazyGetUsersInfoQuery } = dashboardApiSlice