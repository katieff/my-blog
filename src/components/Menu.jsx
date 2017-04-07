import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Hello from './Hello.jsx';
import AboutMe from './AboutMe.jsx';
import Gear from './Gear.jsx';


export default class Menu extends Component {
  render() {
    return (
      <Router >
        <div className="container">
          <section className="header">
            <h1>My Blog</h1>
          </section>
          <div className="navbar-spacer"></div>
          <nav className="navbar">
            <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item"><NavLink exact className="navbar-link" to="/" >Home</NavLink></li>
              <li className="navbar-item"><NavLink className="navbar-link" to="/aboutMe">About Me</NavLink></li>
              <li className="navbar-item"><NavLink className="navbar-link" to="/gear">Gear</NavLink></li>
            </ul>
            </div>
          </nav>
          <div className="docs-section">
            <Route exact path="/" component={Hello}/>
            <Route path="/aboutMe" component={AboutMe}/>
            <Route path="/gear" component={Gear}/>
          </div>
        </div>
      </Router>
    );
  }
}