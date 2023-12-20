import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import UserTable from "../components/UserTable";

import { useEffect, useState } from "react";

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

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (allUsers.isLoading) {
    return <div>Loading....</div>;
  }

  console.log(allUsers.usersArray.results);

  return (
    <div className=" h-screen">
      <h2>All User Data</h2>
      <input
        type="text"
        placeholder="Search User"
        className="  w-60 border-2 border-black rounded-md p-2 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className=" flex justify-center mt-[100px] p-6 ">
        {allUsers && (
          <UserTable
            allUser={allUsers.usersArray.results}
            search={search}
          ></UserTable>
        )}
      </div>
    </div>
  );
};

export default Home;
