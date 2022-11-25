import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: center;

  & p {
    margin: 0;
  }

  & span {
    text-decoration: underline;
    cursor: pointer;
    color: #005b96;
  }
`;

function UserMenu({ onClick, children }) {
  return (
    <StyledMenu onClick={() => onClick()}>
      <p>
        Hola! Usted es un usuario <span>{children}</span>
      </p>
    </StyledMenu>
  );
}

export default UserMenu;
