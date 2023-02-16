import React, { useContext } from "react";
import styled from "styled-components";
import { usePouch } from "use-pouchdb";
import UserContext from "../context/UserContext";

import { addInDatabase, editInDatabase } from "../functions";

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

const ButtonsContainer = ({
  data,
  entity,
  obligatory,
  missingFields,
  setData,
  isEditing,
  close,
  setAlreadyExists,
}) => {
  const { setSentData, locales } = useContext(UserContext);

  const db = usePouch();

  // recorro los obligatorios
  // existe una key coincidente?
  const checkIfFull = () => {
    let hasMandatoryKeys = true;

    try {
      // eslint-disable-next-line array-callback-return
      obligatory?.map((e) => {
        if (
          !data.hasOwnProperty(e) ||
          data?.[e] === "" ||
          (e === "img" && data?.[e] === "NOT AN IMAGE") ||
          (e === "pdf" && data?.[e] === "NOT A PDF")
        ) {
          hasMandatoryKeys = false;
        }
      });
    } finally {
      return hasMandatoryKeys;
    }
  };

  const checkIfAlreadyExists = () => {
    if (entity === "local") {
      if (data?.virtual) {
        let existing = locales?.docs?.find((e) => e.web === data?.web);
        setAlreadyExists(existing ? true : false);
        return existing ? true : false;
      } else {
        let existing = locales?.docs?.find(
          (e) =>
            e.state === data?.state &&
            e.city === data?.city &&
            e.address === data?.address
        );
        setAlreadyExists(existing ? true : false);
        return existing ? true : false;
      }
    } else {
      return false;
    }
  };

  const handleSend = () => {
    let alreadyExists = checkIfAlreadyExists();

    let validation = checkIfFull();

    if (alreadyExists === false) {
      if (validation) {
        missingFields(false);
        if (isEditing) {
          editInDatabase(db, data?._id, data, close, setSentData);
        } else {
          addInDatabase(db, data, entity, setData, close, setSentData);
        }
      } else {
        missingFields(true);
      }
    }
  };

  return (
    <Buttons>
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
