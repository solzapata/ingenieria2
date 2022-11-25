import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}

export default Row;
