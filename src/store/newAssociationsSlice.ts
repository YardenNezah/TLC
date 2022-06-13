import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewAssociations = createAsyncThunk("associations/fetchNewAssociations", async () => {
  const response = await axios.get("http://localhost:8080/associations/new");
  return response.data;
});

const newAssociationsSlice = createSlice({
  name: "newAssociations",
  initialState: {
    newAssociations: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewAssociations.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchNewAssociations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newAssociations= action.payload.result;  
      })
  },
});

export const associationsActions = newAssociationsSlice.actions;

export default newAssociationsSlice;
