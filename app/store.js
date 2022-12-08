import { configureStore } from "@reduxjs/toolkit";
import { candiesReducer, fetchAllCandiesAsync } from "./slices/candiesSlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
  },
});

export { fetchAllCandiesAsync };
