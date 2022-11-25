import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("final");
  const [showModal, setShowModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
