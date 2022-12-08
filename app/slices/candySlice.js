import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandyAsync = createAsyncThunk(
  "candies/fetchOne",
  async (candyId) => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/candies/${candyId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const candySlice = createSlice({
  name: "candy",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCandyAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const candyReducer = candySlice.reducer;
