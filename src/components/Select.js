import React from "react";
import styled from "styled-components";

const StyledSelect = styled.label`
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

function Select({ children, className, onClick }) {
  return (
    <StyledSelect className={className} onClick={() => onClick()}>
      <span className="name">{children.name}</span>
    </StyledSelect>
  );
}

export default Select;
