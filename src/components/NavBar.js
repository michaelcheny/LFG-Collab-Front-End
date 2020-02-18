import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-routes" to="/">
        <h3>React Redux Project</h3>
      </Link>
      <ul className="nav-links">
        <Link className="nav-routes" to="/link1">
          <li>link1</li>
        </Link>

        <Link className="nav-routes" to="/link2">
          <li>link2</li>
        </Link>

        <Link className="nav-routes" to="/link3">
          <li>link3</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
