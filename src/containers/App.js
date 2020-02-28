import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
// import "../styles/App.css";
import NavBar from "../components/NavBar";
import HomeContainer from "./HomeContainer";
import ProjectContainer from "./ProjectContainer";
import SignupContainer from "./SignupContainer";

const App = () => {
  return (
    // <div className="App">
    <>
      <NavBar />
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/projects" component={ProjectContainer} />
            <Route path="/registration" component={SignupContainer} />
            {/* <Route path="/link3" component={something} /> */}
          </Switch>
        </Router>
      </Layout>
      {/* // </div> */}
    </>
  );
};

export default App;
