import React, { useState } from "react";
import "./LoginComponent.css";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { isObjectEmpty } from "../../utils/objects";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import pageLinks from "../../site/pageLinks";

const LoginComponent = ({ handleAuthChange }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (isObjectEmpty(loginForm)) return toast.error("Incomplete form");

      await login(loginForm, setIsLoading);
      toast("Successfully Logged in");
      navigate(pageLinks.dashboardPage.baseUrl);
    } catch (error) {
      console.error(error);
      if (error.message.includes("(auth/invalid-credential)"))
        return toast.error("Wrong data supplied");
      toast.error("An error occurred");
    }
  };
  return (
    <div className="LoginComponent auth-card flex flex-col items-center">
      <img src={Logo} alt="" className="auth-logo" />
      <p className="auth-heading login-heading">Login to GradMate AI</p>
      <div className="auth-input-field w-full">
        <input
          type="text"
          placeholder="Email"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm((p) => ({ ...p, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm((p) => ({ ...p, password: e.target.value }))
          }
        />
      </div>
      <div className="auth-button w-full">
        <Button
          label={"Login"}
          onClick={handleLogin}
          loadingMessage={"Logging you in"}
          isLoading={isLoading}
        />
        <p className="auth-switch-text" onClick={handleAuthChange}>
          Click to create an account
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
