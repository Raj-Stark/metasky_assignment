import { createSlice } from "@reduxjs/toolkit/react";

const storedLoginValue = localStorage.getItem("loginVal");
const initialLoginValue = storedLoginValue
  ? JSON.parse(storedLoginValue)
  : false;
const initialState = {
  isLogin: initialLoginValue,
  email: "metasky@gmail.com",
  password: "123456",
  authErr: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      const { email, password } = action.payload;
      if (email === state.email && password === state.password) {
        state.isLogin = true;
        state.authErr = false;

        localStorage.setItem("loginVal", JSON.stringify(state.isLogin));
      } else {
        state.isLogin = false;
        state.authErr = true;
      }
    },

    handleLogout: (state) => {
      if (localStorage.getItem("loginVal")) {
        localStorage.removeItem("loginVal");
      }
      state.isLogin = false;
    },
  },
});

export const { checkLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
