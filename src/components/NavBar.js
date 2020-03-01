import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StyledNav } from "../styles/styledComponents";

const NavBar = ({ authenticated }) => {
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
        <>
          <Nav.Item>
            <Link to="/myprojects">
              <li className="nav-routes">My Projects</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/account">
              <li className="nav-routes">My Profile</li>
            </Link>
          </Nav.Item>
        </>
      );
    } else {
      return (
        <>
          <Nav.Item>
            <Link to="/registration">
              <li className="nav-routes">Register</li>
            </Link>
          </Nav.Item>

          <li className="nav-routes">
            <LogInForm />
          </li>
        </>
      );
    }
  };

  return (
    <StyledNav>
      <Navbar expand="lg">
        <Navbar.Brand hred="/"> LFG Collab </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/">
                <li className="nav-routes">Home</li>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/projects">
                <li className="nav-routes">Projects</li>
              </Link>
            </Nav.Item>

            {renderAuthLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

export default NavBar;
