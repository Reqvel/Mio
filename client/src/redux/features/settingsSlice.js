import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: '',
  details: '',
  selectedOption: '',
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

    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload
    },

  },
})

export const { setHeader, setSelectedOption } = settingsSlice.actions

export default settingsSlice.reducer