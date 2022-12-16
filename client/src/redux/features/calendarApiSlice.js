import { apiSlice } from "../services/apiSlice";

export const calendarApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getCalendarEvents: builder.query({
      query: () => ({
        url: '/statistics/calendar/',
        method: 'GET',
      }),
    }),
  
    sendChangedCalendarEvents: builder.mutation({
      query: events => ({
        url: '/statistics/calendar/',
        method: 'PATCH',
        body: events,
      })  
    }),

    sendCreatedCalendarEvents: builder.mutation({
      query: events => ({
        url: '/statistics/calendar/',
        method: 'PUT',
        body: events,
      })  
    }),

    sendRemovedCalendarEvents: builder.mutation({
      query: events => ({
        url: '/statistics/calendar/',
        method: 'DELETE',
        body: events,
      })  
    }),

  })
})

export const { useGetCalendarEventsQuery,
               useLazyGetCalendarEventsQuery,
               useSendChangedCalendarEventsMutation,
               useSendCreatedCalendarEventsMutation,
               useSendRemovedCalendarEventsMutation } = calendarApiSlice