import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("final");
  const [showModal, setShowModal] = useState(false);
  const [sentData, setSentData] = useState(false);
  const [locales, setLocales] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showModal,
        setShowModal,
        sentData,
        setSentData,
        locales,
        setLocales,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
