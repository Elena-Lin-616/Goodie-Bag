import { configureStore } from "@reduxjs/toolkit";
import { candiesReducer, fetchAllCandiesAsync } from "./slices/candiesSlice";

import { candyReducer, fetchCandyAsync } from "./slices/candySlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    candy: candyReducer,
  },
});

export { fetchAllCandiesAsync };

export { fetchCandyAsync };
