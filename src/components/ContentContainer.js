import styled from "styled-components";
import React from "react";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 3% 0 2%;
`;

function ContentContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ContentContainer;
