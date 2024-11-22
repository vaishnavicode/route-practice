import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  var payload = { user, setUser };

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
