import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../features/auth/authSlice";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
interface authStateType {
  auth: {
    isLogin: boolean;
    email: string;
    password: string;
  };
}

const AuthPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: false,
    authErr: false,
  });

  const authState = useSelector((state: authStateType) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isLogin) {
      navigate("/home");
    }
  }, [authState.isLogin]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []);

  const dispatch = useDispatch();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (formState.email && formState.password) {
      dispatch(checkLogin(formState));
    } else if (formState.email && formState.password && authState.isLogin) {
      console.log("Raj");
      setFormState({
        ...formState,
        error: false,
        authErr: true,
      });
    } else {
      setFormState({
        ...formState,
        error: true,
        authErr: false,
      });
    }
  };

  return (
    <div className=" h-screen  flex justify-center items-center ">
      <form
        onSubmit={handleFormSubmit}
        className=" h-[300px] w-[600px] border-2 border-black flex flex-col p-6 rounded-md"
      >
        <label>Email:</label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
              error: false,
              authErr: false,
            })
          }
          className=" p-2 border-2 border-black rounded-md "
        />
        {formState.error && (
          <p className=" text-red-500">Please Enter Some Value !!!</p>
        )}
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
              error: false,
              authErr: false,
            })
          }
          className=" p-2 border-2 border-black rounded-md "
        />
        {formState.error && (
          <p className=" text-red-500">Please Enter Some Value !!!</p>
        )}
        <br />
        <button
          type="submit"
          className=" p-2 py-1 bg-green-600 rounded-md text-white"
        >
          Login
        </button>
        {formState.authErr && (
          <h2 className=" text-xl text-red-500">
            {" "}
            Invalid Credentials !!! Try Again
          </h2>
        )}
      </form>
    </div>
  );
};

export default AuthPage;
