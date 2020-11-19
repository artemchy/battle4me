import React from "react";
import styled from "styled-components";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
`;

export const Header = (props) => {
  return (
    <HeaderStyles>
      <HeaderTop />
      <HeaderBottom />
    </HeaderStyles>
  );
};
