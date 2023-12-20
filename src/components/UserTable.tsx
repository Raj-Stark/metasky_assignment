import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterUser } from "../features/users/usersSlice";

const UserTable = ({ allUser, search }: any) => {
  const { filterArray } = allUser;
  const [allUsersData, setAllUsersData] = useState<any>([
    ...allUser.usersArray.results,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterUser(search));
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    if (search) {
      setAllUsersData(filterArray.length > 0 ? filterArray : []);
    } else {
      setAllUsersData([...allUser.usersArray.results]);
    }
  };

  const formatDate = (timeStamp: any) => {
    const date = new Date(timeStamp);

    const formattedDateTime = date.toLocaleString();

    return formattedDateTime;
  };

  return (
    <div className="overflow-auto rounded-lg shadow-md min-w-full">
      <table className="w-full">
        <thead className="bg-gray-400 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Gender
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              DOB
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Location
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Cell
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsersData && allUsersData.length > 0 ? (
            allUsersData.map((user: any, i: number) => (
              <tr
                key={i}
                className={
                  i % 2 === 0
                    ? "bg-gray-50 text-center"
                    : "bg-gray-900 text-white text-center"
                }
              >
                <td className="p-3 text-sm text-left whitespace-nowrap">
                  {user.id.name}
                </td>
                <td className="p-3 text-sm text-left whitespace-nowrap">
                  {`${user.name.first} ${user.name.last}`}
                </td>
                <td className="p-3 text-sm text-left whitespace-nowrap">
                  {user.gender}
                </td>
                <td className="p-3 text-sm text-left whitespace-nowrap">
                  {formatDate(user.dob.date)}
                </td>
                <td className="p-3 text-sm text-left whitespace-nowrap">
                  {user.email}
                </td>
                <td className="p-3 text-sm text-left whitespace-nowrap w-20">
                  {user.location.city}
                </td>
                <td className="p-3 text-sm text-left">{user.cell}</td>
              </tr>
            ))
          ) : (
            <tr className="">
              <td colSpan={7} className="p-3 text-center">
                Not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
