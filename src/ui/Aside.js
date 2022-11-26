import React, { useContext, useEffect } from "react";
import { usePouch } from "use-pouchdb";

import StyledAside from "../components/Aside";
import Label from "../components/Label";
import UserContext from "../context/UserContext";
import { findByEntity } from "../functions";

function Aside() {
  const { sentData, locales, setLocales } = useContext(UserContext);

  const db = usePouch();

  useEffect(() => {
    findByEntity(db, "local", setLocales);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentData]);

  return (
    <StyledAside>
      <h3>Locales</h3>
      {locales?.docs?.length > 0 ? (
        locales?.docs?.map((e) => {
          return (
            <Label key={e._id} onClick={() => {}}>
              {e}
            </Label>
          );
        })
      ) : (
        <span className="not-yet">Aún no existen locales</span>
      )}
    </StyledAside>
  );
}

export default Aside;
