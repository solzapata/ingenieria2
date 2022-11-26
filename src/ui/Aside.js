import React, { useContext, useEffect, useState } from "react";
import { usePouch } from "use-pouchdb";

import StyledAside from "../components/Aside";
import Label from "../components/Label";
import CuponContext from "../context/CuponContext";
import UserContext from "../context/UserContext";
import { findByEntity } from "../functions";

function Aside() {
  const [locales, setLocales] = useState({});

  const { selectedLocal, setSelectedLocal } = useContext(CuponContext);
  const { sentData } = useContext(UserContext);

  const db = usePouch();

  useEffect(() => {
    findByEntity(db, "local", setLocales);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentData]);

  return (
    <StyledAside>
      <h3>Filtrar por local</h3>
      {locales?.docs?.length > 0 ? (
        locales?.docs?.map((e) => {
          return <Label>{e.name}</Label>;
        })
      ) : (
        <span>Aún no existen locales</span>
      )}
    </StyledAside>
  );
}

export default Aside;
