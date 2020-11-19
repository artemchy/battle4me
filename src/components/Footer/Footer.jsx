import React from "react";
import { useApp } from "../../AppContext";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { FooterTop } from "./FooterTop/FooterTop";

export const Footer = () => {
  const lightMode = useApp();
  return (
    <footer>
      <FooterTop lightMode={lightMode} />
      <FooterBottom lightMode={lightMode} />
    </footer>
  );
};
