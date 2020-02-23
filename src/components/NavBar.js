import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-routes" to="/">
        <h3>LFG Collab</h3>
      </Link>

      <ul className="nav-links">
        <Link className="nav-routes" to="/projects">
          <li>Projects</li>
        </Link>

        <Link className="nav-routes" to="/myprojects">
          <li>My Projects</li>
        </Link>

        <Link className="nav-routes" to="/link3">
          <li>link3</li>
        </Link>

        <Link className="nav-routes" to="/account">
          <li>My Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
