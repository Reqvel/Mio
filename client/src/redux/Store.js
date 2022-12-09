import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import authReducer from "./features/authSlice";
import dashboardReducer from "./features/dashboardSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})