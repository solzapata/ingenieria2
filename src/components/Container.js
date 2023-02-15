import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  & .not-yet {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
