import { apiSlice } from "../services/apiSlice";

export const kanbanApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getKanbanCategories: builder.query({
      query: () => ({
        url: '/statistics/kanban/categories/',
        method: 'GET',
      }),
    }),

    getKanbanEvents: builder.query({
      query: () => ({
        url: '/statistics/kanban/',
        method: 'GET',
      }),
    }),
  
    sendChangedKanbanEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'PATCH',
        body: events,
      })  
    }),

    sendCreatedKanbanEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'PUT',
        body: events,
      })  
    }),

    sendRemovedKanbanEvents: builder.mutation({
      query: events => ({
        url: '/statistics/kanban/',
        method: 'DELETE',
        body: events,
      })  
    }),

  })
})

export const { useGetKanbanCategoriesQuery,
               useGetKanbanEventsQuery,
               useLazyGetKanbanEventsQuery,
               useSendChangedKanbanEventsMutation,
               useSendCreatedKanbanEventsMutation,
               useSendRemovedKanbanEventsMutation } = kanbanApiSlice