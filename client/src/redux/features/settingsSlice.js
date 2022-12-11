import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: '',
  details: '',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {

    setHeader: (state, action) => {
      const {header, details} = action.payload
      state.header = header
      state.details = details
    },

  },
})

export const { setHeader } = settingsSlice.actions

export default settingsSlice.reducer