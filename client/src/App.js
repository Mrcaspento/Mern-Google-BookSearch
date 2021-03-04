import React, {Component} from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import home from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
