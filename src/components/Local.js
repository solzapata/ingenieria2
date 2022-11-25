import React from "react";
import styled from "styled-components";

const StyledLocal = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  width: 30%;
  margin: 0 1% 2%;
  height: 300px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  & div {
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
      }
    }
  }
`;

export default function Local({ props }) {
  return (
    <StyledLocal>
      <img src={props.img} alt="Local" />
      <div>
        <h3>{props.name}</h3>
        <h4>
          {props.descripcion} - {props.local}
        </h4>
        <p>{props.direccion}</p>
        <button>
          <a href={props.pdf} target="_blank" rel="noreferrer">
            Descargar cupón
          </a>
        </button>
      </div>
    </StyledLocal>
  );
}
