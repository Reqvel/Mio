import { createSlice } from "@reduxjs/toolkit"; 

export const isThemeDarkKey = 'theme'

const initialState = {
  isThemeDark: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

    setIsThemeDark: (state, action) => {
      state.isThemeDark = action.payload

      localStorage.setItem(isThemeDarkKey, action.payload)
    },

  },
})

export const { setIsThemeDark } = appSlice.actions

export default appSlice.reducer