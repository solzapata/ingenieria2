import React, { useContext, useState, useEffect } from "react";
import { usePouch } from "use-pouchdb";

import Container from "../components/Container";
import Cupon from "../components/Cupon";
import UserContext from "../context/UserContext";
import { findByEntity } from "../functions";

function Content() {
  const [cupones, setCupones] = useState({});

  const { sentData } = useContext(UserContext);

  const db = usePouch();

  useEffect(() => {
    findByEntity(db, "cupon", setCupones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentData]);

  return (
    <Container>
      {cupones?.docs?.length > 0 ? (
        cupones?.docs?.map((e) => {
          return <Cupon key={e._id} props={e} />;
        })
      ) : (
        <span className="not-yet">Aún no existen cupones</span>
      )}
    </Container>
  );
}

export default Content;
