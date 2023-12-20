import UserTable from "../components/UserTable";
import { useFetchUser } from "../hooks/useFetchUser";

const Home = () => {
  const { allUsers, search, setSearch } = useFetchUser();

  if (allUsers.isLoading) {
    return <div>Loading....</div>;
  }
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
        {allUsers && <UserTable allUser={allUsers} search={search}></UserTable>}
      </div>
    </div>
  );
};

export default Home;
