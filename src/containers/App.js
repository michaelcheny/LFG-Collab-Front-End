import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "../actions/getToken";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import HomeContainer from "./HomeContainer";
import ProjectContainer from "./ProjectContainer";
import SignupContainer from "./SignupContainer";

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
              <Route path="/" exact component={HomeContainer} />
              <Route path="/projects" component={ProjectContainer} />
              <Route path="/registration" component={SignupContainer} />
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
