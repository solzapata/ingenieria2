import React, { useContext, useState, useEffect } from "react";
import { usePouch } from "use-pouchdb";

import Container from "../components/Container";
import Cupon from "../components/Cupon";
import UserContext from "../context/UserContext";
import { findByEntity } from "../functions";

function Content() {
  const [cupones, setCupones] = useState({});
  const [filteredCupones, setFilteredCupones] = useState({});

  const { sentData, provinciaSelected, categoriaSelected } =
    useContext(UserContext);

  const db = usePouch();

  useEffect(() => {
    findByEntity(db, "cupon", setCupones);
  }, [db, sentData]);

  useEffect(() => {
    setFilteredCupones(() =>
      cupones?.docs?.filter((e) => {
        if (!!provinciaSelected && !!categoriaSelected) {
          return (
            e?.local?.provincia === provinciaSelected &&
            e?.descripcion === categoriaSelected
          );
        }
        // else if (!provinciaSelected) {
        //   return e?.local?.provincia === provinciaSelected;
        // }
        else if (!!categoriaSelected) {
          return e?.descripcion === categoriaSelected;
        } else {
          return e;
        }
      })
    );
  }, [cupones, provinciaSelected, categoriaSelected]);

  //todo  FALTA FILTRAR POR PROVINCIAS (GUARDAR EN CUPON.LOCAL)
  //todo  FALTA FILTRAR POR CATEGORIA Y PROVINCIA
  //todo  FALTA LO DEL ESCENARIO 2 DEL CASO DE USO 2

  console.log(provinciaSelected);
  console.log(categoriaSelected);

  return (
    <Container>
      {filteredCupones?.length > 0 ? (
        filteredCupones?.map((e) => {
          return <Cupon key={e._id} props={e} />;
        })
      ) : (
        <span className="not-yet">Aún no existen cupones</span>
      )}
    </Container>
  );
}

export default Content;
