import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/stanbic.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <span className="logo">
          <Link className="logo" to="/">
            <img src={logo} alt="" />TeamVault
          </Link>
        </span>
        <span className="hamburger" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          
          <li>
            <Link className="nav-link" to="/add-employee">
              Add Employee
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employee-list">
              Employee List
            </Link>
          </li>
        </ul>

        <span className="get-started">
          <Link className="get-started" to="/add-employee">Get Started</Link>
        </span>
      </nav>
      
    </div>
  );
};

export default Navbar;
