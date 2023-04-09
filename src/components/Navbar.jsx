import React from "react";
import "../styles/Navbar.css";
import { ReactComponent as Castle } from "../assets/castle-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-icon flex">
          <Castle color="purple" className="navbar-logo" />
          <h2 className="navbar-logo-text">Surreal Estate</h2>
        </div>
        <h2 className="navbar-links-item">View Properties</h2>
        <h2 className="navbar-links-item">Add a Property</h2>
      </div>
    </nav>
  );
}
