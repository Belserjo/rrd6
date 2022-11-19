import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";

const Profile = () => {
  const { userId, edit } = useParams();

  return edit === "edit" ? (
    <Outlet />
  ) : (
    <div>
      <h1>AppLayout</h1>
      <Link to={"/users"}>Users list page</Link>
      <h1>Users Layout</h1>
      <Link to={"/"}>Main Page</Link>
      <h1>User Page</h1>
      <ul>
        <li>
          <Link to={"/users"}>Users list page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>EditThisUser</Link>
        </li>
      </ul>
      <h2>{`userId: ${userId}`}</h2>
    </div>
  );
};

export default Profile;
