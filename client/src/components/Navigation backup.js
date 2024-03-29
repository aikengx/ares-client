import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Icon } from "react-bulma-components/full";
import { faUserCircle, faHeadset } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavigationBar extends Component {
  render() {
    return (
        
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h1>&#x2731; ARES</h1>
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              <Link to="/"><span>Home</span></Link>
            </a>
            <a className="navbar-item">
              Documentation
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
              More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item">
                Report an issue
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                Log in
                </a>
                <Link to="/agent"><span><FontAwesomeIcon icon={faHeadset}/></span><span className="small"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}