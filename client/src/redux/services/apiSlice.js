import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../features/authSlice';
import { tokenKey } from '../features/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://25.13.181.237:8000',
  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token
    const token = localStorage.getItem(tokenKey)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (false) {
    // console.log('sending refresh token')
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    // console.log(refreshResult)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ user, ...refreshResult.data}))
      result = await baseQuery(args, api, extraOptions) 
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
})