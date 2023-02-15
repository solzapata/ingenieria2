import React, { useContext, useEffect } from "react";
import { usePouch } from "use-pouchdb";

import StyledAside from "../components/Aside";
import Label from "../components/Label";
import Select from "../components/Select";
import UserContext from "../context/UserContext";
import { categorias } from "../data/categorias";
import { provincias } from "../data/provincias";
import { findByEntity } from "../functions";

function Aside() {
  const {
    sentData,
    locales,
    setLocales,
    user,
    categoriaSelected,
    setCategoriaSelected,
    provinciaSelected,
    setProvinciaSelected,
  } = useContext(UserContext);

  const db = usePouch();

  useEffect(() => {
    findByEntity(db, "local", setLocales);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentData]);

  return (
    <StyledAside>
      {user === "admin" && (
        <>
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
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}

      <h3>Categorías</h3>
      {categorias?.length > 0 &&
        categorias?.map((e) => {
          return (
            <Select
              className={categoriaSelected === e.name ? "active" : ""}
              key={e.id}
              onClick={() =>
                setCategoriaSelected((prevCategoriaSelected) =>
                  prevCategoriaSelected === e.name ? null : e.name
                )
              }
            >
              {e}
            </Select>
          );
        })}

      <br />
      <br />
      <br />
      <br />
      <br />

      <h3>Provincias</h3>
      {provincias?.length > 0 &&
        provincias?.map((e) => {
          return (
            <Select
              className={provinciaSelected === e.name ? "active" : ""}
              key={e.id}
              onClick={() =>
                setProvinciaSelected((prevProvinciaSelected) =>
                  prevProvinciaSelected === e.name ? null : e.name
                )
              }
            >
              {e}
            </Select>
          );
        })}
    </StyledAside>
  );
}

export default Aside;
