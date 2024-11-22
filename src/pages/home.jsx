import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../components/navigationBar";
import { UserContext } from "../contexts/userContext";
import { LogInContext } from "../contexts/loginContext";

const Home = () => {
  // Context
  const { user } = useContext(UserContext);
  const { isLoggedIn } = useContext(LogInContext);

  // Use state
  const [temp, setTemp] = useState("Stranger");

  // Use Effext
  useEffect(() => {
    if (isLoggedIn) {
      setTemp(user.username);
    }
  }, [isLoggedIn, user.username]);

  return (
    <>
      <NavigationBar />
      <h1 style={{ justifySelf: "center" }}>Hello {temp}</h1>
    </>
  );
};

export default Home;
