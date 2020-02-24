import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import "../styles/App.css";
import NavBar from "../components/NavBar";
import HomeContainer from "./HomeContainer";
import ProjectContainer from "./ProjectContainer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Layout>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/projects" component={ProjectContainer} />
            {/* <Route path="/link2" component={something} /> */}
            {/* <Route path="/link3" component={something} /> */}
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
