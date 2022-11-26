import React from "react";
import styled from "styled-components";

import { categorias } from "../data/categorias";
import ButtonsContainer from "./ButtonsContainer";

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

function FormCupon() {
  return (
    <>
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
      <ButtonsContainer />
    </>
  );
}

export default FormCupon;
