import React, { useState } from "react";
import "./Sidebar.css"; // Import styles here
import AddEmployee from "../pages/AddEmployee";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h3>{isOpen ? "Menu" : "☰"}</h3>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? "←" : "→"}
          </button>
        </div>
        {isOpen && (
          <ul className="sidebar-menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        
      </div>
    </div>
  );
};

export default Sidebar;
