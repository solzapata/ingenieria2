import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

import { categorias } from "../data/categorias";
import ButtonsContainer from "./ButtonsContainer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .alert {
    font-size: 10px;
    margin-top: 5px;
    color: orangered;
    border: none;
    padding: 0;
  }

  & .invisible {
    opacity: 0;
  }

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
  margin-top: 30px;

  & label {
    margin-bottom: 10px;
  }

  &.categoria {
    margin-top: 10px;
  }

  & input,
  & select,
  span {
    border-radius: 15px;
    padding: 5px;
    background-color: white;
    outline: none;
    border: 1px solid black;
    font-size: 13px;
    min-height: calc(29px - 10px);
    position: relative;

    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none;
    }

    &[type="file"]::file-selector-button {
      background-color: #005b96;
      color: #fff;
      border: none;
      font-weight: 600;
      max-height: 31px;
      height: 31px;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }

  & .file {
    padding-left: 140px;
  }
`;

function FormCupon({ editing, close }) {
  const [cupon, setCupon] = useState({});
  const [hasMissingFields, setHasMissingFields] = useState(false);

  const { locales } = useContext(UserContext);

  const handleChange = (key, value) => {
    if (key === "local") {
      setCupon((prevLocal) => {
        return {
          ...prevLocal,
          [key]: value,
          state: locales?.docs?.find((e) => e._id === value?.id)?.state,
        };
      });
    } else {
      setCupon((prevLocal) => {
        return { ...prevLocal, [key]: value };
      });
    }
  };

  useEffect(() => {
    if (editing?._id) {
      setCupon({ ...editing });
    }
  }, [editing]);

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  return (
    <>
      <FormContainer>
        <Form>
          <label>Tipo de descuento (ej: 15% ó 2x1) *</label>
          <input
            value={cupon?.name ? cupon?.name : ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form>
        <Form>
          <label>Imagen descriptiva *</label>
          <input
            className="file"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            onChange={async (e) => {
              if (e.target.files.length !== 0) {
                const file = e.target.files[0];

                if (file?.type?.includes("image")) {
                  const imageStr = await fileToBase64(file);

                  handleChange("img", imageStr);
                } else {
                  handleChange("img", "NOT AN IMAGE");
                }
              }
            }}
          />
          <span
            className={`alert ${
              cupon?.img === "NOT AN IMAGE" ? "visible" : "invisible"
            }`}
          >
            ESTE TIPO DE ARCHIVOS NO ES PERMITIDO
          </span>
        </Form>
        <Form className="categoria">
          <label>Categoría *</label>
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
        <div className="shared">
          <Form>
            <label>Local *</label>
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
            <label>Provincia</label>
            <span>
              {locales?.docs?.find((e) => e._id === cupon?.local?.id)?.state}
            </span>
          </Form>
        </div>
        <Form>
          <label>Pdf descargable *</label>
          <input
            className="file"
            type="file"
            accept="application/pdf"
            onChange={async (e) => {
              if (e.target.files.length !== 0) {
                const file = e.target.files[0];

                if (file?.type?.includes("pdf")) {
                  const imageStr = await fileToBase64(file);

                  handleChange("pdf", imageStr);
                } else {
                  handleChange("pdf", "NOT A PDF");
                }
              }
            }}
          />
        </Form>
        <span
          className={`alert ${
            cupon?.pdf === "NOT A PDF" ? "visible" : "invisible"
          }`}
        >
          ESTE TIPO DE ARCHIVOS NO ES PERMITIDO
        </span>
        {locales?.docs?.length === 0 && (
          <span className="alert">
            Atención! No vas a poder cargar cupones si no existen locales
          </span>
        )}
        {hasMissingFields && (
          <span className="alert">Faltan campos obligatorios</span>
        )}
      </FormContainer>
      <ButtonsContainer
        data={cupon}
        entity="cupon"
        obligatory={["name", "img", "descripcion", "local", "pdf"]}
        missingFields={setHasMissingFields}
        setData={setCupon}
        isEditing={cupon?._id ? true : false}
        close={close}
      />
    </>
  );
}

export default FormCupon;
