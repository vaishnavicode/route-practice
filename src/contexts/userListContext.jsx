import { createContext, useState } from "react";
import { usersList } from "../utils/userList";

const UserListContext = createContext();

const UserListProvider = ({ children }) => {
  const [userList, setUserList] = useState(usersList);

  var payload = { userList, setUserList };

  return (
    <UserListContext.Provider value={payload}>
      {children}
    </UserListContext.Provider>
  );
};

export { UserListContext, UserListProvider };
