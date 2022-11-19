import React from "react";
import { Link, useParams } from "react-router-dom";

const ProfileEdit = () => {
  const { userId } = useParams();

  function incrementUserId(userId) {
    if (userId == 6) return userId;
    return ++userId;
  }
  function decrementUserId(userId) {
    if (userId == 1) return userId;
    return --userId;
  }

  return (
    <div>
      <h1>AppLayout</h1>
      <Link to={"/users"}>Users list page</Link>
      <h1>Users Layout</h1>
      <Link to={"/"}>Main Page</Link>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}`}>UserProfilePage</Link>
        </li>

        {userId < 6 ? (
          <li>
            <Link to={`/users/${incrementUserId(userId)}`}>nextUser</Link>
          </li>
        ) : (
          ""
        )}

        {userId > 1 ? (
          <li>
            <Link to={`/users/${decrementUserId(userId)}`}>prevUser</Link>
          </li>
        ) : (
          ""
        )}

        <li>
          <Link to={`/users`}>UsersListPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileEdit;
