import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePouch } from "use-pouchdb";

import { getByIdInDatabase } from "../functions";

const StyledCupon = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  width: 30%;
  margin: 0 1% 2%;
  height: 300px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  & div {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(50% - 20px);

    & h3,
    & h4,
    & p {
      margin: 0 0 5px;
    }

    & button {
      border: none;
      padding: 5px;
      background-color: #005b96;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 600;

      & a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export default function Cupon({ props }) {
  const [currentLocal, setCurrentLocal] = useState();

  const db = usePouch();

  useEffect(() => {
    if (props?.local?.id) {
      getByIdInDatabase(db, props?.local?.id, setCurrentLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <StyledCupon>
      <img src={props.img} alt="Cupon" />
      <div>
        <h3>{props.name}</h3>
        <h4>
          {props.descripcion}{" "}
          {currentLocal?.name ? " - " + currentLocal?.name : ""}
        </h4>
        <p>
          {(currentLocal?.address ? currentLocal?.address + " - " : "") +
            (currentLocal?.city ? currentLocal?.city : "")}
        </p>
        <button>
          <a href={props.pdf} target="_blank" rel="noreferrer">
            Descargar cupón
          </a>
        </button>
      </div>
    </StyledCupon>
  );
}
