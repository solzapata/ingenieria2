import React, { useContext } from "react";

import Header from "../components/Header";
import Label from "../components/Label";
import Row from "../components/Row";
import UserMenu from "../components/UserMenu";
import CuponContext from "../context/CuponContext";
import UserContext from "../context/UserContext";
import { categorias } from "../data/categorias";

function Categorias() {
  const { categoria, setCategoria } = useContext(CuponContext);

  const { user, setUser } = useContext(UserContext);

  return (
    <Header>
      <UserMenu
        onClick={() => {
          setUser((prevUser) => (prevUser === "final" ? "admin" : "final"));
        }}
      >
        {user}
      </UserMenu>
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
    </Header>
  );
}

export default Categorias;
