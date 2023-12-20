import React, { useState } from "react";

const AuthPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(formState);
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
            setFormState({ ...formState, email: e.target.value })
          }
          className=" p-2 border-2 border-black rounded-md "
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          className=" p-2 border-2 border-black rounded-md "
        />
        <br />
        <button
          type="submit"
          className=" p-2 py-1 bg-green-600 rounded-md text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
