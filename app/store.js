import { configureStore } from "@reduxjs/toolkit";
import {
  candiesReducer,
  fetchAllCandiesAsync,
  addNewCandyAsync,
} from "./slices/candiesSlice";

import {
  candyReducer,
  fetchCandyAsync,
  updateCandyAsync,
  deleteCandyAsync,
} from "./slices/candySlice";
export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    candy: candyReducer,
  },
});

export { fetchAllCandiesAsync, addNewCandyAsync };

export { fetchCandyAsync, updateCandyAsync, deleteCandyAsync };
