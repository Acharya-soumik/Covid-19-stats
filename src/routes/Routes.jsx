import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Patient from "../Components/Patient";

function Routes() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand text-dark">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="text-dark nav-link">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/patients" className="text-dark nav-link">
                Patients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="text-dark nav-link">
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/patients" component={Patient} />
        <Route exact path="/contacts" component={Contact} />
      </Switch>
    </div>
  );
}

export default Routes;
