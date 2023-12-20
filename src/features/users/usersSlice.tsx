import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import usersApi from "../../apis/usersApi";

const initialState = {
  isLoading: true,
  usersArray: [],
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const response = await usersApi.get("?results=50");
    const data = await (response as any).json();
    return data;
  } catch (error) {
    throw error;
  }
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersArray = action.payload;
    });
  },
});

export default usersSlice.reducer;
