import { useEffect, useState } from "react";

const UserTable = ({ allUser }: any) => {
  const [allUsersData, setAllUsersData] = useState<any>(null);

  useEffect(() => {
    setAllUsersData(allUser);
  }, [allUser]);

  return (
    <div className=" overflow-auto rounded-lg shadow-md ">
      <table className=" w-full">
        <thead className=" bg-gray-400 border-b-2 border-gray-200">
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
          {allUsersData &&
            allUsersData.map((user: any, i: number) => {
              return (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-gray-50 text-center"
                      : "bg-gray-900 text-white text-center"
                  }
                >
                  <td className=" p-3 text-sm  text-left whitespace-nowrap">
                    {user.id.name}
                  </td>
                  <td className=" p-3 text-sm text-left whitespace-nowrap ">{`${user.name.first} ${user.name.last}`}</td>
                  <td className=" p-3 text-sm  text-left whitespace-nowrap">
                    {user.gender}
                  </td>
                  <td className=" p-3 text-sm text-left whitespace-nowrap ">
                    {user.dob.date}
                  </td>
                  <td className=" p-3 text-sm text-left whitespace-nowrap ">
                    {user.email}
                  </td>
                  <td className=" p-3 text-sm  text-left whitespace-nowrap w-20">
                    {user.location.city}
                  </td>
                  <td className=" p-3 text-sm text-left">{user.cell}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
