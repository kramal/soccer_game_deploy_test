import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Spot The BAll
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wrongAnswer">
                  WrongAnswer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/RightAnswer">
                  RightAnswer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/GameOver">
                  GameOver
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
