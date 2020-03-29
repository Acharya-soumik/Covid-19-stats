import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Hospital from "../Components/Hospital";
import TotalTest from "../Components/TotalTest";

function Routes() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                total Test
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                hospitals and beds
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/totaltests" component={TotalTest} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/contacts" component={Contact} />
      </Switch>
    </div>
  );
}

export default Routes;
