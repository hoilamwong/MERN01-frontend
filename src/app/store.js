import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import timerReducer from "../features/timer/timerSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    timer: timerReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})