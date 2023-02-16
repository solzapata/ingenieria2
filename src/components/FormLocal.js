import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { provincias } from "../data/provincias";
import ButtonsContainer from "./ButtonsContainer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .shared {
    display: flex;

    & div {
      width: 49%;
      justify-content: space-between;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  &.check {
    flex-direction: row;
    justify-content: space-between;
    max-width: 180px;

    & input {
      width: 20px;
      margin: 0;
    }

    & label {
      margin-bottom: 0;
    }
  }

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

function FormLocal({ editing, close }) {
  const [local, setLocal] = useState({});

  const handleChange = (key, value) => {
    setLocal((prevLocal) => {
      return { ...prevLocal, [key]: value };
    });
  };

  useEffect(() => {
    if (editing?._id) {
      setLocal({ ...editing });
    }
  }, [editing]);

  useEffect(() => {
    if (local?.virtual === true) {
      setLocal((prevLocal) => {
        return { ...prevLocal, state: "", city: "", address: "" };
      });
    }
  }, [local?.virtual]);

  // FALTA NO DEJAR GUARDAR SI YA EXISTE ESA DIRECCION
  // falta "faltan campos requeridos"

  return (
    <>
      <FormContainer>
        <Form>
          <label>Nombre *</label>
          <input
            value={local?.name ? local?.name : ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form>
        <Form>
          <label>Contacto *</label>
          <input
            value={local?.contacto ? local?.contacto : ""}
            onChange={(e) => handleChange("contacto", e.target.value)}
          />
        </Form>
        <Form className="check">
          <label>¿Es un local virtual? *</label>
          <input
            checked={local?.virtual ? local?.virtual : false}
            type="checkbox"
            onChange={(e) => handleChange("virtual", e.target.checked)}
          />
        </Form>
        {local?.virtual !== true && (
          <>
            <div className="shared">
              <Form>
                <label>Provincia *</label>
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
                <label>Ciudad *</label>
                <input
                  value={local?.city ? local?.city : ""}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </Form>
            </div>
            <Form>
              <label>Dirección *</label>
              <input
                value={local?.address ? local?.address : ""}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </Form>
          </>
        )}
        <Form>
          <label>Página web o red social {local?.virtual && "*"}</label>
          <input
            value={local?.web ? local?.web : ""}
            onChange={(e) => handleChange("web", e.target.value)}
          />
        </Form>
      </FormContainer>
      <ButtonsContainer
        data={local}
        entity="local"
        obligatory={
          local?.virtual === true
            ? ["name", "contacto", "virtual", "web"]
            : ["name", "contacto", "virtual", "state", "city", "address"]
        }
        setData={setLocal}
        isEditing={local?._id ? true : false}
        close={close}
      />
    </>
  );
}

export default FormLocal;
