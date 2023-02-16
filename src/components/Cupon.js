import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { usePouch } from "use-pouchdb";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import UserContext from "../context/UserContext";
import { getByIdInDatabase, deleteInDatabase } from "../functions";
import Modal from "./Modal";

const StyledCupon = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  width: 30%;
  margin: 0 1% 2%;
  height: 300px;
  overflow: hidden;

  & .admin-edit {
    display: flex;
    justify-content: space-between;
    padding: 0;
    flex-direction: row;
    height: auto;

    & .title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  & img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  & .content {
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
        display: block;
      }
    }
  }

  & .icons {
    & svg {
      cursor: pointer;
      margin-left: 15px;
      font-size: 20px;
    }
  }

  & .edit,
  & .delete {
    transition: 0.2s ease-in;
  }

  & .edit:hover {
    color: orange;
  }

  & .delete:hover {
    color: darkred;
  }
`;

export default function Cupon({ props }) {
  const [currentLocal, setCurrentLocal] = useState();
  const [showEditingModal, setShowEditingModal] = useState(false);

  const { user, setSentData } = useContext(UserContext);

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
      <div className="content">
        <div className="admin-edit">
          <span className="title">{props.name}</span>
          {user === "admin" && (
            <>
              <span className="icons">
                <AiFillEdit
                  className="edit"
                  onClick={() => setShowEditingModal(true)}
                />
                <AiFillDelete
                  className="delete"
                  onClick={() => deleteInDatabase(db, props._id, setSentData)}
                />
              </span>
              {showEditingModal && (
                <Modal
                  data={props.entity}
                  accion="Editar"
                  editing={props}
                  close={setShowEditingModal}
                />
              )}
            </>
          )}
        </div>
        <h4>
          {props.descripcion}{" "}
          {currentLocal?.name ? " - " + currentLocal?.name : ""}
        </h4>
        <p>
          {(currentLocal?.address ? currentLocal?.address + " - " : "") +
            (currentLocal?.city ? currentLocal?.city : "")}
        </p>
        <button>
          <a download href={props.pdf} target="_blank" rel="noreferrer">
            Descargar cupón
          </a>
        </button>
      </div>
    </StyledCupon>
  );
}
