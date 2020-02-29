import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StyledNav } from "../styles/styledComponents";

const NavBar = () => (
  //   <Navbar bg="dark" variant="dark" expand="md">
  //   <Navbar.Brand href="/">LFG Collab</Navbar.Brand>
  //   <Nav className="mr-auto">
  //   <Nav.Link href="/">Home</Nav.Link>
  //   <Nav.Link href="/projects">Projects</Nav.Link>
  //   <Nav.Link href="/myprojects">My Projects</Nav.Link>
  // </Nav>
  //     <Form inline>
  //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //       <Button variant="outline-info">Search</Button>
  //     </Form>
  //     <LogInForm />
  //     </Navbar>

  // <StyledNav>
  //   <Navbar expand="lg">
  //     <Navbar.Brand hred="/"> LFG Collab </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="ml-auto">
  //         <Nav.Item>
  //           <Nav.Link href="/">Home</Nav.Link>
  //         </Nav.Item>

  //         <Nav.Item>
  //           <Nav.Link href="/projects">Projects</Nav.Link>
  //         </Nav.Item>

  //         <Nav.Item>
  //           <Nav.Link href="/myprojects">My Projects</Nav.Link>
  //         </Nav.Item>

  //         <Nav.Item>
  //           <Nav.Link href="/registration">Register</Nav.Link>
  //         </Nav.Item>

  //         <LogInForm />
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // </StyledNav>

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

      <li className="nav-routes">
        <LogInForm />
      </li>
    </ul>
  </nav>
);

export default NavBar;
