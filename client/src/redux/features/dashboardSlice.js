import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: '',
  details: '',
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {

    setHeader: (state, action) => {
      const {header, details} = action.payload
      state.header = header
      state.details = details
    },

  },
})

export const { setHeader } = dashboardSlice.actions

export default dashboardSlice.reducer