import React, { useContext } from "react";
import StyledAside from "../components/Aside";
import Label from "../components/Label";
import CuponContext from "../context/CuponContext";

function Aside() {
  const { selectedLocal, setSelectedLocal } = useContext(CuponContext);

  return (
    <StyledAside>
      <h3>Filtrar por local</h3>
    </StyledAside>
  );
}

export default Aside;
