import React, { useContext } from "react";
import { usePouch } from "use-pouchdb";

import Header from "../components/Header";
import Label from "../components/Label";
import CuponContext from "../context/CuponContext";
import { categorias } from "../data/categorias";

function Categorias() {
  const { categoria, setCategoria } = useContext(CuponContext);

  const db = usePouch();

  function addTodo(text) {
    // var todo = {
    //   _id: new Date().toISOString(),
    //   title: text,
    //   completed: false,
    // };
    // db.put(todo, function callback(err, result) {
    //   if (!err) {
    //     console.log("Successfully posted a todo!");
    //   }
    // });
  }

  return (
    <Header>
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
    </Header>
  );
}

export default Categorias;
