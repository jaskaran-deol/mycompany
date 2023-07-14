import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Partners from "./Partners";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='App'>
      <div>
        <div><Navbar /></div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/partners" component={Partners} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
