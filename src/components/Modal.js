import React from "react";
import styled from "styled-components";

import { categorias } from "../data/categorias";

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

  & .buttons {
    margin-top: auto;
  }

  & h2 {
    margin: 0;
  }

  & .close {
    cursor: pointer;
  }

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  & label {
    margin-bottom: 10px;
  }

  & input,
  & select {
    border-radius: 15px;
    padding: 5px;
    background-color: white;
    outline: none;
    border: 1px solid black;

    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none;
    }
  }
`;

function Modal({ data, accion, close }) {
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
        <FormContainer>
          <Form>
            <label>Tipo de descuento</label>
            <input />
          </Form>
          <Form>
            <label>Categoría</label>
            <select>
              {categorias.map((e) => {
                return <option key={e.id}>{e.name}</option>;
              })}
            </select>
          </Form>
          <Form>
            <label>Local</label>
            <select>
              <option></option>
            </select>
          </Form>
          <Form>
            <label>Pdf</label>
            <input />
          </Form>
        </FormContainer>
      ) : (
        <FormContainer>
          <Form>
            <label>Nombre</label>
            <input />
          </Form>
          <Form>
            <label>Ciudad</label>
            <input />
          </Form>
          <Form>
            <label>Dirección</label>
            <input />
          </Form>
        </FormContainer>
      )}
      <div className="buttons">
        <button>Cancelar</button>
        <button>Guardar</button>
      </div>
    </StyledContainer>
  );
}

export default Modal;
