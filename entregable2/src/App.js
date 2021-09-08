import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Home,
  About,
  Child
} from "./components/NewInput";

export default function BasicExample() {
  let datos = [
    {
      id: 1,
      name: "Sergio"
    }
  ]

  return (
    <Router>

      <Link style={{ padding: "30px" }} to="/">Home</Link>

      <Link style={{ padding: "30px" }} to="/about">About</Link>

      <Link style={{ padding: "30px" }} to="/dashboard">Dashboard</Link>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:id" children={<Child />}>
          <Child />
        </Route>
      </Switch>

    </Router>
  );
}