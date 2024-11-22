import { createContext, useState } from "react";

const LogInContext = createContext();

const LogInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  var payload = { isLoggedIn, setIsLoggedIn };

  return (
    <LogInContext.Provider value={payload}>{children}</LogInContext.Provider>
  );
};

export { LogInContext, LogInProvider };
