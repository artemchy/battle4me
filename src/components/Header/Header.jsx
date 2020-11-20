import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useApp, useAppToggle } from "../../AppContext";
import { getLenguage } from "../../redux/selectors";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
`;

export const Header = () => {
  const lightMode = useApp();
  const toggle = useAppToggle();
  const lenguage = useSelector(getLenguage);
  return (
    <HeaderStyles>
      <HeaderTop lightMode={lightMode} toggle={toggle} lenguage={lenguage} />
      <HeaderBottom lightMode={lightMode} lenguage={lenguage} />
    </HeaderStyles>
  );
};
