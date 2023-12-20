import UserTable from "../components/UserTable";
import { handleLogout } from "../features/auth/authSlice";
import { useFetchUser } from "../hooks/useFetchUser";

const Home = () => {
  const { allUsers, search, setSearch, dispatch } = useFetchUser();

  if (allUsers.isLoading) {
    return (
      <div className=" text-center text-2xl font-semibold">Loading....</div>
    );
  }
  return (
    <div className=" h-screen">
      <div className="h-20 px-6 bg-gray-800 flex justify-between items-center">
        <h1 className=" text-2xl font-bold text-white">User Data</h1>
        <button
          onClick={() => dispatch(handleLogout())}
          className=" px-2 py-1 bg-green-500 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className=" mt-20 px-6">
        <input
          type="text"
          placeholder="Search User"
          className=" w-96 border-2 border-black rounded-md p-2 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className=" flex justify-center p-6 "></div>
        {allUsers && <UserTable allUser={allUsers} search={search}></UserTable>}
      </div>
    </div>
  );
};

export default Home;
