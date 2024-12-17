import React from "react";
import "./Navbar.css";
import LogoComponent from "../LogoComponent/LogoComponent";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo-container">
        <LogoComponent />
      </div>
      <div className="nav-action-container">
        <button className="dashboard-nav-btn">My Dashboard</button>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
