import React from "react";
import "./Navbar.css";
import LogoComponent from "../LogoComponent/LogoComponent";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import pageLinks from "../../site/pageLinks";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="logo-container">
        <LogoComponent />
      </div>
      <div className="nav-action-container">
        <button
          className="dashboard-nav-btn"
          onClick={() => navigate(pageLinks.dashboardPage.baseUrl)}
        >
          My Dashboard
        </button>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
