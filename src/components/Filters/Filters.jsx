import React from "react";
import styled from "styled-components";
import { useApp } from "../../AppContext";

export const Filters = () => {
  const lightMode = useApp();
  
  const Body = styled.div`
    padding: 60px;
    background: ${({ lightMode }) =>
      lightMode
        ? "#fff"
        : "linear-gradient(180deg, rgba(18, 40, 46, 0.01) 50%, #15122a)"};
    ${({ lightMode }) =>
      lightMode && "box-shadow: 0 12px 28px 0 hsla(0,0%,44.7%,.12)"};
  `;

  const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;

    & li {
      width: 20%;
      margin-bottom: 27px;
    }

    & button {
      min-width: 210px;
      font-size: 1rem;
      padding: 12px;
      border: none;
      border-radius: 27px;
      background: ${({ lightMode }) =>
        lightMode ? "#0b8fb7" : "rgba(156, 153, 174, 0.19)"};
      color: #f2f2f2;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s linear;

      &:hover {
        background-color: ${({ lightMode }) =>
          lightMode ? "#097292" : "#0b8fb7"};
      }
    }
  `;

  return (
    <div className="container" style={{ maxWidth: "1290px" }}>
      <Body lightMode={lightMode}>
        <Items lightMode={lightMode}>
          <li>
            <button>Sports/Activities</button>
          </li>
          <li>
            <button>Health & Wellness</button>
          </li>
          <li>
            <button>Lifestyle</button>
          </li>
          <li>
            <button>Gaming & Toys</button>
          </li>
          <li>
            <button>Travel Experiences</button>
          </li>
          <li>
            <button>Dining Experiences</button>
          </li>
          <li>
            <button>Electronics</button>
          </li>
          <li>
            <button>Entertainment</button>
          </li>
          <li>
            <button>Fashion</button>
          </li>
          <li>
            <button>Others</button>
          </li>
        </Items>
      </Body>
    </div>
  );
};
