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

export const updateCandyAsync = createAsyncThunk(
  "candy/update",
  async ({ candyId, quantity }) => {
    const response = await axios.put(
      `http://localhost:1337/api/candies/${candyId}`,
      { quantity }
    );
    return response.data;
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
    builder.addCase(updateCandyAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const candyReducer = candySlice.reducer;
