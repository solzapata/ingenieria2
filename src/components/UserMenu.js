import React, { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import Modal from "./Modal";

const StyledMenu = styled.div`
  display: flex;
  width: calc(100% - 60px);
  padding: 30px;
  justify-content: space-between;
  background-color: #005b96;
  color: white;

  & p {
    margin: 0;
    text-align: center;
  }

  & span {
    text-decoration: underline;
    cursor: pointer;
    text-shadow: 1px 1px 2px black, 0 0 1em #005b96, 0 0 0.2em #005b96;
  }

  & button {
    border: none;
    padding: 5px;
    color: #005b96;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
  }

  & button.inactive {
    opacity: 0;
    cursor: auto;
  }
`;

function UserMenu({ onClick, data }) {
  const [modalContent, setModalContent] = useState("");

  const { showModal, setShowModal } = useContext(UserContext);

  return (
    <>
      <StyledMenu>
        <button
          className={data !== "admin" ? "inactive" : ""}
          onClick={() => {
            setModalContent("local");
            setShowModal(true);
          }}
        >
          Agregar local
        </button>

        <p
          onClick={() => {
            onClick();
          }}
        >
          Usted es un usuario <span>{data}</span>
        </p>

        <button
          className={data !== "admin" ? "inactive" : ""}
          onClick={() => {
            setModalContent("cupon");
            setShowModal(true);
          }}
        >
          Agregar cupon
        </button>
      </StyledMenu>
      {showModal && <Modal data={modalContent} accion="Agregar" />}
    </>
  );
}

export default UserMenu;
