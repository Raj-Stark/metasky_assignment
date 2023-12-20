import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import usersApi from "../../apis/usersApi";

const initialState = {
  isLoading: true,
  usersArray: [],
  isError: false,
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const response = await usersApi.get("?results=10");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersArray = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default usersSlice.reducer;
