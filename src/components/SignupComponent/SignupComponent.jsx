import React, { useState } from "react";
import "./SignupComponent.css";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { useSearchParams } from "react-router-dom";
import { isObjectEmpty } from "../../utils/objects";
import { toast } from "react-toastify";

const SignupComponent = ({ handleAuthChange }) => {
  const { signup } = useAuth();

  // button loading state
  const [isLoading, setIsLoading] = useState(false);

  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // Operation button
  const handleSignup = async () => {
    try {
      if (isObjectEmpty(signupForm)) return toast.error("Incomplete form");

      await signup(signupForm, setIsLoading);
    } catch (error) {
      console.error(error);
      if (error.message.includes("(auth/email-already-in-use)"))
        return toast.error("Your account already exists");
      toast.error("An error occurred");
    }
  };
  return (
    <div className="SignupComponent auth-card flex flex-col items-center">
      <img src={Logo} alt="" className="auth-logo" />
      <p className="auth-heading login-heading">Create an account</p>
      <div className="auth-input-field w-full">
        <input
          type="text"
          placeholder="Firstname"
          value={signupForm.firstname}
          onChange={(e) =>
            setSignupForm((p) => ({ ...p, firstname: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Lastname"
          value={signupForm.lastname}
          onChange={(e) =>
            setSignupForm((p) => ({ ...p, lastname: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={signupForm.email}
          onChange={(e) =>
            setSignupForm((p) => ({ ...p, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={(e) =>
            setSignupForm((p) => ({ ...p, password: e.target.value }))
          }
        />
      </div>
      <div className="auth-button w-full">
        <Button
          label={"Signup"}
          onClick={handleSignup}
          isLoading={isLoading}
          loadingMessage={"Creating your account"}
        />
        <p className="auth-switch-text" onClick={handleAuthChange}>
          Click to log in to your account
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;
