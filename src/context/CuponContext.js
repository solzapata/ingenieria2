import React, { createContext, useState } from "react";

const CuponContext = createContext();

const CuponProvider = ({ children }) => {
  const [selectedLocal, setSelectedLocal] = useState("");

  return (
    <CuponContext.Provider
      value={{
        selectedLocal,
        setSelectedLocal,
      }}
    >
      {children}
    </CuponContext.Provider>
  );
};

export default CuponContext;
export { CuponProvider };
