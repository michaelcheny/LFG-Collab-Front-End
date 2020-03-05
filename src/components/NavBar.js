import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StyledNav } from "../styles/styledComponents";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "../actions/tokenActions";
import { Logout } from "../actions/usersActions";

class NavBar extends Component {
  handleLogout = () => {
    const { token } = this.props;
    this.props.logOut(token);
  };

  renderAuthLinks = () => {
    const { authenticated } = this.props;
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

          <Nav.Item>
            <Link to="#">
              <li className="nav-routes" onClick={this.handleLogout}>
                Log Out
              </li>
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

  greeting = () => {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <Nav.Item>
          {/* <Link to="/registration">
              <li className="nav-routes">Register</li>
            </Link> */}
          <li className="nav-routes">Hi {this.props.currentUser.name}!</li>
        </Nav.Item>
      );
    }
  };

  render() {
    return (
      <StyledNav>
        <Navbar expand="lg">
          <Navbar.Brand hred="/"> LFG Collab </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {this.greeting()}

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

              {this.renderAuthLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledNav>
    );
  }
}

const mapStateToProps = state => {
  const { user, token } = state;
  return {
    authenticated: user.authenticated,
    currentUser: user.user,
    token: token.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(getToken()),
    logOut: token => dispatch(Logout(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
