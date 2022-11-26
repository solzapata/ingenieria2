import React from "react";
import styled from "styled-components";
import FormCupon from "./FormCupon";

import FormLocal from "./FormLocal";

const StyledContainer = styled.div`
  display: flex;
  position: fixed;
  width: calc(500px - 60px);
  height: calc(500px - 60px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 30px;
  z-index: 5;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & h2 {
    margin: 0;
  }

  & .close {
    cursor: pointer;
  }
`;

function Modal({ data, accion, editing, close }) {
  return (
    <StyledContainer>
      <div>
        <h2>
          {accion} {data}
        </h2>
        <h2 className="close" onClick={() => close(false)}>
          X
        </h2>
      </div>
      {data === "cupon" ? (
        <FormCupon />
      ) : (
        <FormLocal editing={editing} close={close} />
      )}
    </StyledContainer>
  );
}

export default Modal;
