import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>AppLayout</h1>
      <Link to={"users"}>Users list page</Link>
      <h1>MainPage</h1>
    </div>
  );
};

export default Main;
