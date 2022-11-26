import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

import { categorias } from "../data/categorias";
import ButtonsContainer from "./ButtonsContainer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .alert {
    font-size: 12px;
    margin-top: 10px;
    color: orangered;
  }

  & .invisible {
    opacity: 0;
  }
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

function FormCupon({ editing, close }) {
  const [cupon, setCupon] = useState({});

  const { locales } = useContext(UserContext);

  const handleChange = (key, value) => {
    setCupon((prevLocal) => {
      return { ...prevLocal, [key]: value };
    });
  };

  useEffect(() => {
    if (editing?._id) {
      setCupon({ ...editing });
    }
  }, [editing]);

  return (
    <>
      <FormContainer>
        <Form>
          <label>Tipo de descuento (ej: 15% ó 2x1)</label>
          <input
            value={cupon?.name ? cupon?.name : ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form>
        <Form>
          <label>Url de imagen descriptiva</label>
          <input
            value={cupon?.img ? cupon?.img : ""}
            onChange={(e) => handleChange("img", e.target.value)}
          />
        </Form>
        <Form>
          <label>Categoría</label>
          <select
            value={cupon?.descripcion ? cupon?.descripcion : ""}
            onChange={(e) => handleChange("descripcion", e.target.value)}
          >
            <option></option>
            {categorias.map((e) => {
              return <option key={e.id}>{e.name}</option>;
            })}
          </select>
        </Form>
        <Form>
          <label>Local</label>
          <select
            value={cupon?.local?.name ? cupon?.local?.name : ""}
            onChange={(e) => {
              handleChange("local", {
                name: e.target.value,
                id: e.target.options?.[e.target?.options.selectedIndex]?.id,
              });
            }}
          >
            <option></option>
            {locales?.docs?.map((e) => {
              return (
                <option key={e._id} id={e._id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </Form>
        <Form>
          <label>Pdf descargable</label>
          <input
            value={cupon?.pdf ? cupon?.pdf : ""}
            onChange={(e) => handleChange("pdf", e.target.value)}
          />
        </Form>
        <span
          className={`alert ${
            locales?.docs?.length > 0 ? "invisible" : "visible"
          }`}
        >
          Atención! No vas a poder cargar cupones si no existen locales
        </span>
      </FormContainer>
      <ButtonsContainer
        data={cupon}
        entity="cupon"
        obligatory={["name", "img", "descripcion", "local", "pdf"]}
        setData={setCupon}
        isEditing={cupon?._id ? true : false}
        close={close}
      />
    </>
  );
}

export default FormCupon;
