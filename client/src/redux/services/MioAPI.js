import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mioApi = createApi({
  reducerPath: 'MioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers) => {
        headers.set('', '');

        return headers
    },
  }),
  endpoints: (builder) => ({

  })
})

export const {

} = mioApi