import { Navigate } from "react-router-dom";
import { LogInContext } from "../contexts/loginContext";
import { UserContext } from "../contexts/userContext";
import React, { useContext, useEffect } from "react";

const LogOut = () => {
  // UseContexts

  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUser({ username: "", email: "", password: "" });
    }
  }, [isLoggedIn, setIsLoggedIn, setUser]);

  return (
    <>
      <h1 style={{ justifySelf: "center" }}>Logging You Out</h1>
      <Navigate to="/" />
    </>
  );
};

export default LogOut;
