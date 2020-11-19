import React from "react";
import styled from "styled-components";
import close from "../../../../assets/close.svg";
import { FiSearch } from "react-icons/fi";

const Form = styled.form`
  position: relative;

  input {
    width: 260px;
    height: 42px;
    padding-left: 37px;
    padding-right: 25px;
    background: none;
    border-bottom: 1px solid #979797;
    color: #f2f2f2;
    font-size: 1rem;
  }

  img, span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  span { left: 0; }
  img { right: 5px; }
`;

export const SearchForm = ({showSearch}) => {
  return (
    <Form>
      <span>
        <FiSearch size={22} />
      </span>
      <input type="text" />
      <img onClick={() => showSearch(false)} src={close} alt="X" />
    </Form>
  );
};
