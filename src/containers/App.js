import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectsPage";
import ProjectDetail from "./ProjectPage";
import SignupPage from "./SignupPage";
import NewProjectPage from "./NewProjectPage";
import ProfilePage from "./ProfilePage";
import NoMatch from "../components/NoMatch";
import { getToken, autoLogin } from "../actions/usersActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { getToken, autoLogin } = this.props;
    getToken().then((token) => {
      autoLogin(token);
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <NavBar />
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/projects" exact component={ProjectPage} />
              <Route path="/projects/:id" component={ProjectDetail} />
              <Route path="/registration" component={SignupPage} />
              <Route path="/newproject" component={NewProjectPage} />
              <Route path="/account" component={ProfilePage} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </div>
    );
  }
}

// export default App;
const mapDispatchToProps = (dispatch) => ({
  autoLogin: (token) => dispatch(autoLogin(token)),
  getToken: () => dispatch(getToken()),
});

export default connect(null, mapDispatchToProps)(App);
