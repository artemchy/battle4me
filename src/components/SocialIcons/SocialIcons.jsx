import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaVk,
} from "react-icons/fa";
import { useApp } from "../../AppContext";

const Icons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
  }
`;

export const SocialIcons = () => {
  const lightMode = useApp()
  return (
    <Icons lightMode={lightMode}>
      <a href="https://twitter.com/battlefourme">
        <FaTwitter size={16} color={lightMode ? "#000" : "#fff"} />
      </a>
      <a href="https://www.facebook.com/battlefourme/">
        <FaFacebookF size={16} color={lightMode ? "#000" : "#fff"} />
      </a>
      <a href="https://www.instagram.com/battle4.me/">
        <FaInstagram size={16} color={lightMode ? "#000" : "#fff"} />
      </a>
      <a href="https://www.linkedin.com/company/battle4me/">
        <FaLinkedinIn size={16} color={lightMode ? "#000" : "#fff"} />
      </a>
      <a href="https://vk.com/battle4me">
        <FaVk size={16} color={lightMode ? "#000" : "#fff"} />
      </a>
    </Icons>
  );
};
