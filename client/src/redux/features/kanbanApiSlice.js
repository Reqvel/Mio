import { apiSlice } from "../services/apiSlice";

export const kanbanApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getCategories: builder.query({
      query: () => ({
        url: '/statistics/kanban/categories/',
        method: 'GET',
      }),
    }),

    getEvents: builder.query({
      query: () => ({
        url: '/statistics/kanban/',
        method: 'GET',
      }),
    }),
  
    sendChangedEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'PATCH',
        body: events,
      })  
    }),

    sendCreatedEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'PUT',
        body: events,
      })  
    }),

    sendRemovedEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'DELETE',
        body: events,
      })  
    }),

  })
})

export const { useGetCategoriesQuery,
               useGetEventsQuery,
               useLazyGetEventsQuery,
               useSendChangedEventsMutation,
               useSendCreatedEventsMutation,
               useSendRemovedEventsMutation } = kanbanApiSlice