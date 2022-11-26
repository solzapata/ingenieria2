import React, { useContext, useState } from "react";
import styled from "styled-components";
import { usePouch } from "use-pouchdb";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import UserContext from "../context/UserContext";
import { deleteInDatabase } from "../functions";
import Modal from "./Modal";

const StyledLabel = styled.label`
  margin-bottom: 15px;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: space-between;

  & .name {
    font-size: 20px;
    transition: 0.2s ease-in;
  }

  & .name:hover {
    color: #005b96;
    cursor: pointer;
    transform: scale(1.01);
  }

  &.active {
    background-color: #005b96;
    color: #fff;
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

function Label({ children, className, onClick }) {
  const [showEditingModal, setShowEditingModal] = useState(false);

  const { user, setSentData } = useContext(UserContext);

  const db = usePouch();

  return (
    <StyledLabel className={className} onClick={() => onClick()}>
      <span className="name">{children.name}</span>
      {user === "admin" && (
        <>
          <span className="icons">
            <AiFillEdit
              className="edit"
              onClick={() => setShowEditingModal(true)}
            />
            <AiFillDelete
              className="delete"
              onClick={() => deleteInDatabase(db, children._id, setSentData)}
            />
          </span>
          {showEditingModal && (
            <Modal
              data={children.entity}
              accion="Editar"
              editing={children}
              close={setShowEditingModal}
            />
          )}
        </>
      )}
    </StyledLabel>
  );
}

export default Label;
