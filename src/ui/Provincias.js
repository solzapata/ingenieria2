import React, { useContext } from "react";
import Aside from "../components/Aside";
import Label from "../components/Label";
import CuponContext from "../context/CuponContext";
import { provincias } from "../data/provincias";

function Provincias() {
  const { provincia, setProvincia } = useContext(CuponContext);

  return (
    <Aside>
      {provincias?.map((e) => {
        return (
          <Label
            key={e.id}
            onClick={() =>
              setProvincia((prevProvincia) =>
                prevProvincia === e.id ? "" : e.id
              )
            }
            className={provincia === e.id && "active"}
          >
            {e.name}
          </Label>
        );
      })}
    </Aside>
  );
}

export default Provincias;
