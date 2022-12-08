import { configureStore } from "@reduxjs/toolkit";
import { mioApi } from "./services/MioAPI";
import { signInSlice } from "./features/signInSlice";

export const store = configureStore({
  reducer: {
    [mioApi.reducerPath]: mioApi.reducer,
    signInReducer: signInSlice.reducer,
    
  }
})