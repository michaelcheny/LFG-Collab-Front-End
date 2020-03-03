import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getToken } from "../actions/tokenActions";
// import { Logout } from "../actions/usersActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectsPage";
import PersonalProjectsPage from "./PersonalProjectsPage";
import SignupPage from "./SignupPage";

class App extends Component {
  // componentDidMount() {
  //   this.props.getToken();
  // }

  render() {
    // const { authenticated, currentUser, logOut, token } = this.props;
    return (
      <>
        <Router>
          <NavBar
          // loggedIn={authenticated}
          // currentUser={currentUser.name}
          // logOut={logOut}
          // token={token}
          />
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/projects" component={ProjectPage} />
              <Route path="/myprojects" component={PersonalProjectsPage} />
              <Route path="/registration" component={SignupPage} />
              {/* <Route path="/link3" component={something} /> */}
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   const { user, token } = state;
//   console.log(user);
//   return {
//     authenticated: user.authenticated,
//     currentUser: user.user,
//     token: token.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getToken: () => dispatch(getToken()),
//     logOut: token => dispatch(Logout(token))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
