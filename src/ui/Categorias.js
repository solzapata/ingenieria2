import React, { useContext } from "react";

import CategoriasMenu from "../components/CategoriasMenu";
import Label from "../components/Label";
import Row from "../components/Row";
import CuponContext from "../context/CuponContext";
import { categorias } from "../data/categorias";

function Categorias() {
  const { categoria, setCategoria } = useContext(CuponContext);

  return (
    <CategoriasMenu>
      <Row>
        {categorias.map((e) => {
          return (
            <Label
              key={e.id}
              onClick={() =>
                setCategoria((prevCategoria) =>
                  prevCategoria === e.id ? "" : e.id
                )
              }
              className={categoria === e.id && "active"}
            >
              {e.name}
            </Label>
          );
        })}
      </Row>
    </CategoriasMenu>
  );
}

export default Categorias;
