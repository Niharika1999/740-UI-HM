import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">Hotel Name</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Food">Food</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Rooms">Room</NavLink>
            </li>
            <NavDropdown title="Signup/SignIn" id="basic-nav-dropdown">
                <li className="dropdown-item">
                  <NavLink to="/SignUp" className="nav-link">Sign Up</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/SignIn" className="nav-link">Sign In</NavLink>
                </li>
              </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
