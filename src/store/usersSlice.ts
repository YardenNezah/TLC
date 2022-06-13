import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:8080/auth");
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users= action.payload.result;        
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        //console.log(action.error.message);
      });
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
