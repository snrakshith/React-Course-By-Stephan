import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">List</Link>
      <Link to="/streams/edit">Edit </Link>
    </div>
  );
};

export default NavBar;
