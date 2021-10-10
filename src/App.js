import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  return (
    <Router>
      <div className="cointainer-fluid">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/projects" component={Projects} exact={true} />
          <Route path="/contacts" component={Contact} exact={true} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
