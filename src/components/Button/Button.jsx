import React from "react";
import "./Button.css";
import Logo from "../../assets/logo.png";

const Button = ({ label, isLoading, onClick, loadingMessage }) => {
  if (!isLoading) return <button onClick={onClick}>{label}</button>;
  else
    return (
      <button className="loading-btn" disabled>
        {/* {loadingMessage || label || "loading"} */}
        <img
          src={Logo}
          alt=""
          className="loading-btn-img anim-infinite-scale"
        />
      </button>
    );
};

export default Button;
