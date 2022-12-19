import { apiSlice } from "../services/apiSlice";

export const socialsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    youTubeConnect: builder.mutation({
      query: payload => ({
        url: '/statistics/youtube/authorize/',
        method: 'POST',
        body: { ...payload }
      }),
    }),

    youTubeDisconnect: builder.query({
      query: () => ({
        url: '/statistics/youtube/cancel/',
        method: 'GET',
      }),
    }),

    tikTokConnect: builder.mutation({
      query: payload => ({
        url: '/statistics/tiktok/authorize/',
        method: 'POST',
        body: { ...payload }
      }),
    }),

    tikTokDisconnect: builder.query({
      query: () => ({
        url: '/statistics/tiktok/cancel/',
        method: 'GET',
      }),
    }),

  })
})

export const { useYouTubeConnectMutation,
               useLazyYouTubeDisconnectQuery,
               useTikTokConnectMutation,
               useLazyTikTokDisconnectQuery } = socialsApiSlice