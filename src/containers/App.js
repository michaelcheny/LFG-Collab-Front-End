import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "../actions/getToken";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import SignupPage from "./SignupPage";

class App extends Component {
  async componentDidMount() {
    await this.props.getToken();
  }

  render() {
    const { authenticated } = this.props;
    return (
      <>
        <Router>
          <NavBar authenticated={authenticated} />
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/projects" component={ProjectPage} />
              <Route path="/myprojects" component={ProjectPage} />
              <Route path="/registration" component={SignupPage} />
              {/* <Route path="/link3" component={something} /> */}
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { authenticated: user.authenticated };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(getToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
