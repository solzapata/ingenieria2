import React, { createContext, useState, useEffect } from "react";
// import { usePouch } from "use-pouchdb";
// import { categorias } from "../data/categorias";
// import { UseNewRandomId } from "../functions";

const CuponContext = createContext();

const CuponProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("");
  const [totalCategorias, setTotalCategorias] = useState([]);
  const [provincia, setProvincia] = useState("");
  const [totalProvincias, setTotalProvincias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sentData, setSentData] = useState(false);

  // const db = usePouch();

  // useEffect(() => {
  //   db?.get("categorias")
  //     .then((result) => {
  //       try {
  //         if (result !== undefined) {
  //           // ACA HAY CATEGORIAS
  //         }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       try {
  //         categorias.map((e) => {
  //           var newId = UseNewRandomId("categoria");

  //           return db?.put({ ...e, _id: newId, entity: "categoria" });
  //         });
  //       } finally {
  //         setIsLoading(false);
  //         console.log(error);
  //       }
  //     });
  // }, [db]);

  // useEffect(() => {
  //   if (!isLoading) {
  //     db?.find({
  //       selector: { entity: "categoria" },
  //     })
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [db, isLoading]);

  return (
    <CuponContext.Provider
      value={{
        categoria,
        setCategoria,
        provincia,
        setProvincia,
        totalCategorias,
        setTotalCategorias,
        totalProvincias,
        setTotalProvincias,
        isLoading,
        setIsLoading,
        sentData,
        setSentData,
      }}
    >
      {children}
    </CuponContext.Provider>
  );
};

export default CuponContext;
export { CuponProvider };
