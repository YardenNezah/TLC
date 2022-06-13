import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFounders = createAsyncThunk("founders/fetchFounders", async () => {
  const response = await axios.get("http://localhost:8080/founders");
  return response.data;
});

const foundersSlice = createSlice({
  name: "founders",
  initialState: {
    founders: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFounders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFounders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.founders= action.payload.result;        
      })
      .addCase(fetchFounders.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const foundersActions = foundersSlice.actions;

export default foundersSlice;


