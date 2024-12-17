import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pageLinks from "../site/pageLinks";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { createUserInDatabase, liveUserData } from "../controllers/account";
import { hideLoader, showLoader } from "../utils/loader";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // States
  const [userCredential, setUserCredential] = useState(undefined);
  const [accountInformation, setAccountInformation] = useState(null);

  // Navigation control for auth
  useEffect(() => {
    // Stop operation if user is in auth page
    if (location.pathname === pageLinks.authPage.baseUrl) return;
    if (userCredential === null) {
      navigate(pageLinks.authPage.baseUrl);
    } else if (userCredential === undefined) {
      // Activate loading screen for auth page
      showLoader("auth");
    } else {
      // Deactivate loading screen for auth page
      hideLoader("auth");
    }
  }, [userCredential, location]);

  // Account Information update
  useEffect(() => {
    if (!userCredential) return;
    liveUserData(userCredential.uid, (data) => setAccountInformation(data));
  }, [userCredential]);

  // Observer for user credential
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (data) =>
      setUserCredential(data)
    );

    return () => {
      observer();
    };
  }, []);

  // Auth Methods
  const signup = ({ firstname, lastname, email, password }, setIsLoading) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        const authResponse = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await createUserInDatabase(
          { firstname, lastname, email },
          authResponse.user.uid
        );
        setUserCredential(authResponse.user);
        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  };
  const login = ({ email, password }, setIsLoading) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        const authResponse = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setUserCredential(authResponse.user);
        resolve(authResponse.user);
      } catch (error) {
        console.error(error);
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  };
  const signout = (setIsLoading) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        await signOut(auth);
      } catch (error) {
        console.error(error);
        toast.error("Can't log you out");
      } finally {
        setIsLoading(false);
      }
    });
  };
  return (
    <AuthContext.Provider
      value={{ userCredential, accountInformation, signup, login, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
