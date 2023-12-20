import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  isLogin: false,
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

        const randomToken = Math.ceil(Math.random() * 6);
        localStorage.setItem("token", JSON.stringify(randomToken));
      } else {
        state.isLogin = false;
        state.authErr = true;
      }
    },

    handleLogout: (state) => {
      console.log("logout!!!!");
      localStorage.removeItem("token");
      state.isLogin = false;
    },
  },
});

export const { checkLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
