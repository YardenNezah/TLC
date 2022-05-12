import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVolunteering = createAsyncThunk("volunteering/fetchVolunteering", async () => {
  const response = await axios.get("http://localhost:8080/volunteering");
  return response.data;
});

const volunteeringSlice = createSlice({
  name: "volunteering",
  initialState: {
    volunteering: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVolunteering.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchVolunteering.fulfilled, (state, action) => {
        state.isLoading = false;
        state.volunteering= action.payload.result;
      })
      .addCase(fetchVolunteering.rejected, (state, action) => {
        state.isLoading = false;
        //console.log(action.error.message);
      });
  },
});

export const volunteeringActions = volunteeringSlice.actions;

export default volunteeringSlice;


