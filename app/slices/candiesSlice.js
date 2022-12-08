import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCandiesAsync = createAsyncThunk(
  "candies/fetchAll",
  async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/candies");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addNewCandyAsync = createAsyncThunk(
  "candies/add",
  async (candy) => {
    const response = await axios.post(
      "http://localhost:1337/api/candies",
      candy
    );
    return response.data;
  }
);

const candiesSlice = createSlice({
  name: "candies",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCandiesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewCandyAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const candiesReducer = candiesSlice.reducer;
