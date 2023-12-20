import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";

const initialState = {
  isLoading: true,
  usersArray: [],
  filterArray: [],
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
