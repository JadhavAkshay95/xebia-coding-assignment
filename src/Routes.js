import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Search from "./component/Search";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
