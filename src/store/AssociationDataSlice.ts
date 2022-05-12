import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAssociations = createAsyncThunk("associations/fetchAssociations", async () => {
  const response = await axios.get("http://localhost:8080/associations");
  return response.data;
});

const associationsSlice = createSlice({
  name: "associations",
  initialState: {
    associations: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAssociations.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAssociations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.associations= action.payload.result;    
      })
      .addCase(fetchAssociations.rejected, (state, action) => {
        state.isLoading = false;
       // console.log(action.error.message);
      });
  },
});

export const associationsActions = associationsSlice.actions;

export default associationsSlice;
