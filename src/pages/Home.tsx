import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  return (
    <div>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
    </div>
  );
};

export default Home;
