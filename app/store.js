import { configureStore } from "@reduxjs/toolkit";
import { candiesReducer } from "./slices/candiesSlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
  },
});
