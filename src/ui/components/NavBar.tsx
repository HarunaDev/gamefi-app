import React, { type JSX } from "react";
import { Link } from "react-router-dom";
const NavBar = (): JSX.Element => {
  return (
    <nav>
      <p>Gamefi App</p>

      <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
