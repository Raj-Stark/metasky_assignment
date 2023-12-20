import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import usersApi from "../../apis/usersApi";

const initialState = {
  isLoading: true,
  usersArray: [],
  filterArray: [],
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
  reducers: {
    filterUser: (state, action) => {
      const search = action.payload;

      if (search) {
        const filterData = state.usersArray.results.filter((user: any) => {
          return (
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.name.last.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.location.city.toLowerCase().includes(search.toLowerCase()) ||
            user.cell.toLowerCase().includes(search.toLowerCase())
          );
        });

        state.filterArray = filterData;
      }
    },
  },
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

export const { filterUser } = usersSlice.actions;

export default usersSlice.reducer;
