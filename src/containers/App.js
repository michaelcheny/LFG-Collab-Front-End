import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/App.css";
import NavBar from "../components/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/link1" component={something} />
          <Route path="/link2" component={something} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
