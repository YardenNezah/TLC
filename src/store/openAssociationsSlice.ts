import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOpenAssociations = createAsyncThunk("associations/fetchOpenAssociations", async () => {
  const response = await axios.get("http://localhost:8080/associations/open");
  return response.data;
});

const openAssociationsSlice = createSlice({
  name: "openAssociations",
  initialState: {
    openAssociations: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOpenAssociations.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchOpenAssociations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.openAssociations= action.payload.result;        
      })
  },
});

export const associationsActions = openAssociationsSlice.actions;

export default openAssociationsSlice;
