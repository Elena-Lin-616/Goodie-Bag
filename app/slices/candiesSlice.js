import { createSlice } from "@reduxjs/toolkit";

const candiesSlice = createSlice({
  name: "candies",
  initialState: [],
  reducers: {},
});

export const candiesReducer = candiesSlice.reducer;
