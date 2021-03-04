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
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import Books from "./pages/books";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/books" component={Books}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
