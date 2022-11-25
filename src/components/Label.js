import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-bottom: 15px;
  font-size: 20px;
  transition: 0.2s ease-in;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;

  &:hover {
    color: #005b96;
    cursor: pointer;
    transform: scale(1.01);
  }

  &.active {
    background-color: #005b96;
    color: #fff;
  }
`;

function Label({ children, className, onClick }) {
  return (
    <StyledLabel className={className} onClick={() => onClick()}>
      {children}
    </StyledLabel>
  );
}

export default Label;
