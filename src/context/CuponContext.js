import React, { createContext, useState } from "react";

const CuponContext = createContext();

const CuponProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("");
  const [provincia, setProvincia] = useState("");

  return (
    <CuponContext.Provider
      value={{
        categoria,
        setCategoria,
        provincia,
        setProvincia,
      }}
    >
      {children}
    </CuponContext.Provider>
  );
};

export default CuponContext;
export { CuponProvider };
