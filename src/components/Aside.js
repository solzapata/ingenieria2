import React from "react";
import styled from "styled-components";

const StyledAside = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  & h3 {
    padding-left: 30px;
    margin-top: 0;
  }
`;

function Aside({ children }) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
