import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
