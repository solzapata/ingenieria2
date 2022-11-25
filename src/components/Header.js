import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  margin-left: auto;
  justify-content: space-evenly;
  padding: 2% 0;
  flex-direction: column;
`;

function Header({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Header;
