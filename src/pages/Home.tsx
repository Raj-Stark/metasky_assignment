import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import UserTable from "../components/UserTable";
import { all } from "axios";
import { useEffect } from "react";

interface allUsers {
  users: {
    isLoading: boolean;
    usersArray: Array<any>;
    isError: boolean;
  };
}

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const allUsers = useSelector((state: allUsers) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (allUsers.isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className=" h-screen">
      <h2>All User Data</h2>
      <div className=" flex justify-center mt-[200px] p-6 ">
        {allUsers && (
          <UserTable allUser={allUsers.usersArray.results}></UserTable>
        )}
      </div>
    </div>
  );
};

export default Home;
