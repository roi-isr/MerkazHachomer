import React from "react";
import "./App.css";
// install react-router-dom
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import RouterDaniel from './project-files/daniel-folder/RouterDaniel'
// install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./project-files/daniel-folder/HomePage";
import ItemView from "./project-files/amit-folder/ItemView";
import VirtualStore from "./project-files/roi-folder/VirtualStore/VirtualStore";
import ProcessPage from "./ProcessPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home"><RouterDaniel /></Route>
        <Route path="/virtual-store"><VirtualStore /></Route>{" "}
        <Route path="/item-view"><ItemView /></Route>{" "}
        <Route path="/process-page"><ProcessPage /></Route>{" "}
        <Route exact path="/">
          <Redirect to="/process-page" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
