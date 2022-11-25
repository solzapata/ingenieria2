import React from "react";
import styled from "styled-components";

const StyledAside = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

function Aside({ children }) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
