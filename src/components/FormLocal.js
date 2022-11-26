import React, { useState } from "react";
import styled from "styled-components";

import { provincias } from "../data/provincias";
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

function FormLocal() {
  const [local, setLocal] = useState({});

  const handleChange = (key, value) => {
    setLocal((prevLocal) => {
      return { ...prevLocal, [key]: value };
    });
  };

  return (
    <>
      <FormContainer>
        <Form>
          <label>Nombre</label>
          <input
            value={local?.name ? local?.name : ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form>
        <Form>
          <label>Provincia</label>
          <select
            value={local?.state ? local?.state : ""}
            onChange={(e) => handleChange("state", e.target.value)}
          >
            <option></option>
            {provincias.map((e) => {
              return <option key={e.id}>{e.name}</option>;
            })}
          </select>
        </Form>
        <Form>
          <label>Ciudad</label>
          <input
            value={local?.city ? local?.city : ""}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </Form>
        <Form>
          <label>Dirección</label>
          <input
            value={local?.address ? local?.address : ""}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </Form>
      </FormContainer>
      <ButtonsContainer
        data={local}
        obligatory={["name", "state", "city", "address"]}
        setData={setLocal}
      />
    </>
  );
}

export default FormLocal;
