// import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StyledNav } from "../styles/styledComponents";

// const NavBar = ({ loggedIn, currentUser, logOut, token }) => {
// const handleLogout = () => {
//   console.log(token);
//   logOut(token);
// };

// const renderAuthLinks = () => {
//   if (loggedIn) {
//     return (
//       <>
//         <Nav.Item>
//           <Link to="/myprojects">
//             <li className="nav-routes">My Projects</li>
//           </Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Link to="/account">
//             <li className="nav-routes">My Profile</li>
//           </Link>
//         </Nav.Item>

//         <Nav.Item>
//           {/* <Link to="/logout"> */}
//           <li className="nav-routes" onClick={handleLogout}>
//             Log Out
//           </li>
//           {/* </Link> */}
//         </Nav.Item>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Nav.Item>
//           <Link to="/registration">
//             <li className="nav-routes">Register</li>
//           </Link>
//         </Nav.Item>

//         <li className="nav-routes">
//           <LogInForm />
//         </li>
//       </>
//     );
//   }
// };

// const greeting = () => {
//   if (loggedIn) {
//     return (
//       <Nav.Item>
//         {/* <Link to="/registration">
//             <li className="nav-routes">Register</li>
//           </Link> */}
//         <li className="nav-routes">Hi {currentUser}!</li>
//       </Nav.Item>
//     );
//   }
// };

//   return (
// <StyledNav>
//   <Navbar expand="lg">
//     <Navbar.Brand hred="/"> LFG Collab </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
//         {greeting()}

//         <Nav.Item>
//           <Link to="/">
//             <li className="nav-routes">Home</li>
//           </Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Link to="/projects">
//             <li className="nav-routes">Projects</li>
//           </Link>
//         </Nav.Item>

//         {renderAuthLinks()}
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// </StyledNav>
//   );
// };

import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "../actions/tokenActions";
import { Logout } from "../actions/usersActions";

class NavBar extends Component {
  handleLogout = () => {
    console.log(this.props.token);
    this.props(this.props.token);
  };

  renderAuthLinks = () => {
    if (this.props.authenticated) {
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
            {/* <Link to="/logout"> */}
            <li className="nav-routes" onClick={this.handleLogout}>
              Log Out
            </li>
            {/* </Link> */}
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
    if (this.props.authenticated) {
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
  console.log(user);
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

// export default NavBar;
