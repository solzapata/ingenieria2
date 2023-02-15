import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("final");
  const [showModal, setShowModal] = useState(false);
  const [sentData, setSentData] = useState(false);
  const [locales, setLocales] = useState({});
  const [provinciaSelected, setProvinciaSelected] = useState(null);
  const [categoriaSelected, setCategoriaSelected] = useState(null);

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
        provinciaSelected,
        setProvinciaSelected,
        categoriaSelected,
        setCategoriaSelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
