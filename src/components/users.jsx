import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";

const Users = () => {
  const { userId } = useParams();
  const users = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return userId ? (
    <Outlet />
  ) : (
    <div>
      <h1>AppLayout</h1>
      <Link to={"/users"}>Users list page</Link>
      <h1>Users Layout</h1>
      <Link to={"/"}>Main Page</Link>
      <h1>User List Page</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{`User ${u.id}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
