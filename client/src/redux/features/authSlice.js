import { createSlice } from "@reduxjs/toolkit";

export const tokenKey = 'token'

const initialState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setCredentials: (state, action) => {
      const { email, token } = action.payload
      state.user = email
      state.token = token

      localStorage.setItem(tokenKey, token)
    },

    logOut: (state, action) => {
      state.user = null
      state.token = null

      localStorage.removeItem(tokenKey)
    },
    
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer