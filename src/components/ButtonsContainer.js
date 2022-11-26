import React, { useContext } from "react";
import styled from "styled-components";
import { usePouch } from "use-pouchdb";
import UserContext from "../context/UserContext";

import { addInDatabase } from "../functions";

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;

  & button {
    border: none;
    padding: 5px 10px;
    background-color: #005b96;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const ButtonsContainer = ({ data, obligatory, setData }) => {
  const { setShowModal } = useContext(UserContext);

  const db = usePouch();

  // recorro los obligatorios
  // existe una key coincidente?
  const checkIfFull = () => {
    let hasMandatoryKeys = true;

    try {
      obligatory?.map((e) => {
        if (!data.hasOwnProperty(e) || data?.[e] === "") {
          hasMandatoryKeys = false;
        }
      });
    } finally {
      return hasMandatoryKeys;
    }
  };

  const handleSend = () => {
    let validation = checkIfFull();

    if (validation) {
      addInDatabase(db, data, "local", setData, setShowModal);
    }
  };

  return (
    <Buttons>
      <button>Cancelar</button>
      <button
        onClick={() => {
          handleSend();
        }}
      >
        Guardar
      </button>
    </Buttons>
  );
};

export default ButtonsContainer;
