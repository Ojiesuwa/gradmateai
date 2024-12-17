import React, { useState } from "react";
import "./Auth.css";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import SignupComponent from "../../components/SignupComponent/SignupComponent";

const Auth = () => {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <div className="Auth">
      <div className="auth_overlay_wrapper"></div>
      <div className="auth-card-container intro-drop-anim">
        {loginMode ? (
          <LoginComponent handleAuthChange={() => setLoginMode(false)} />
        ) : (
          <SignupComponent handleAuthChange={() => setLoginMode(true)} />
        )}
      </div>
    </div>
  );
};

export default Auth;
