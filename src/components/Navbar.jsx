import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ReactComponent as Castle } from '../assets/castle-logo.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <div className="logo-icon flex">
        <Castle color="purple" className="navbar-logo" />
        <h2 className="navbar-logo-text">Surreal Estate</h2>
      </div>

      <Link to="/">
        <h2 className="navbar-links-item">View Properties</h2>
      </Link>
      <Link to="/add-property">
        <h2 className="navbar-links-item">Add a Property</h2>
      </Link>
    </div>
  </nav>
);

export default Navbar;
