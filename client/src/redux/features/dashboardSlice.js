import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: '',
  details: '',
  selectedPage: ''
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

    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload
    },

  },
})

export const { setHeader, setSelectedPage } = dashboardSlice.actions

export default dashboardSlice.reducer