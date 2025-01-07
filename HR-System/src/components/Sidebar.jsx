// import React, { useState } from "react";
// import "./Sidebar.css"; // Import styles here
// import AddEmployee from "../pages/AddEmployee";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="page-container">
//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <h3>{isOpen ? "Menu" : "☰"}</h3>
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             {isOpen ? "←" : "→"}
//           </button>
//         </div>
//         {isOpen && (
//           <ul className="sidebar-menu">
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//             <li>Contact</li>
//           </ul>
//         )}
//         {!is}
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <AddEmployee />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { FaUser, FaServicestack, FaEnvelope, FaUserPlus } from "react-icons/fa"; // Example icons
import "./Sidebar.css"; // Import styles here
import AddEmployee from "../pages/AddEmployee";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Add Employee", icon: <FaUserPlus /> },
    { name: "View Employees", icon: <FaUser /> },
    { name: "Services", icon: <FaServicestack /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="page-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          {/* <h3>{isOpen ? "Menu" : "☰"}</h3> */}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? "☰" : "☰"}
          </button>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              {item.icon}
              {isOpen && <span className="menu-text">{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="main-content">
        <AddEmployee />
      </div> */}
    </div>
  );
};

export default Sidebar;
