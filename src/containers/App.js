import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectsPage";
import ProjectDetail from "./ProjectPage";
import SignupPage from "./SignupPage";
import NewProjectPage from "./NewProjectPage";
import MyProfile from "./MyProfile";

class App extends Component {
  // componentDidMount() {
  //   this.props.getToken();
  // }

  render() {
    // const { authenticated, currentUser, logOut, token } = this.props;
    return (
      <div className="app">
        <Router>
          <NavBar />
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/myprojects" exact component={ProjectPage} />
              <Route path="/projects" exact component={ProjectPage} />
              <Route path="/projects/:id" component={ProjectDetail} />
              <Route path="/registration" component={SignupPage} />
              <Route path="/newproject" component={NewProjectPage} />
              <Route path="/account" component={MyProfile} />
              {/* <Route path="/link3" component={something} /> */}
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </div>
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
