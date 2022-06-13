import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularAssociations = createAsyncThunk("associations/fetchPopularAssociations", async () => {
  const response = await axios.get("http://localhost:8080/associations/popular");
  return response.data;
});

const popularAssociationsSlice = createSlice({
  name: "popularAssociations",
  initialState: {
    popularAssociations: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPopularAssociations.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularAssociations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularAssociations= action.payload.result;        
      })
  },
});

export const associationsActions = popularAssociationsSlice.actions;

export default popularAssociationsSlice;
