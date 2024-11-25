import { Navigate } from "react-router-dom";
import { LogInContext } from "../contexts/loginContext";
import { UserContext } from "../contexts/userContext";
import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../contexts/loaderContext";

const LogOut = () => {
  // UseContexts

  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoggedIn(false);
        setUser({ username: "", email: "", password: "" });
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoggedIn, setIsLoggedIn, setUser, setIsLoading]);

  return (
    <>
      <h1 style={{ justifySelf: "center" }}>Logging You Out</h1>
      {!isLoggedIn && <Navigate to="/" />}
    </>
  );
};

export default LogOut;
