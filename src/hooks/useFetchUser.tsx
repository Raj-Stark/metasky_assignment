import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

import { useEffect, useState } from "react";
interface allUsers {
  users: {
    isLoading: boolean;
    usersArray: Array<any>;
    isError: boolean;
  };
}

export const useFetchUser = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const allUsers = useSelector((state: allUsers) => state.users);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return { allUsers, search, setSearch, dispatch };
};
