import React from "react";
import "./LogoComponent.css";
import Logo from "../../assets/logo.png";

const LogoComponent = () => {
  return (
    <div className="LogoComponent">
      <div className="logo-image-wrapper">
        <img src={Logo} alt="" />
      </div>
      <div className="text-wrapper">
        <p className="site-name">GRADMATE AI</p>
        <p className="site-moto">
          A software for custom, effortless school paper generation
        </p>
      </div>
    </div>
  );
};

export default LogoComponent;
