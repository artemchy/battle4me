import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useApp } from "../../AppContext";
import { getLenguage } from "../../redux/selectors";

export const Filters = () => {
  const lightMode = useApp();
  const lenguage = useSelector(getLenguage);
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
            <button>
              {lenguage === "Eng" ? "Sports/Activities" : "Спорт"}
            </button>
          </li>
          <li>
            <button>
              {lenguage === "Eng" ? "Health & Wellness" : "Здоровье"}
            </button>
          </li>
          <li>
            <button>{lenguage === "Eng" ? "Lifestyle" : "Образ жизни"}</button>
          </li>
          <li>
            <button>{lenguage === "Eng" ? "Gaming & Toys" : "Игры"}</button>
          </li>
          <li>
            <button>
              {lenguage === "Eng" ? "Travel Experiences" : "Путешествия"}
            </button>
          </li>
          <li>
            <button>
              {lenguage === "Eng" ? "Dining Experiences" : "Питания"}
            </button>
          </li>
          <li>
            <button>{lenguage === "Eng" ? "Electronics" : "Техника"}</button>
          </li>
          <li>
            <button>
              {lenguage === "Eng" ? "Entertainment" : "Развлечения"}
            </button>
          </li>
          <li>
            <button>{lenguage === "Eng" ? "Fashion" : "Мода"}</button>
          </li>
          <li>
            <button>{lenguage === "Eng" ? "Others" : "Другое"}</button>
          </li>
        </Items>
      </Body>
    </div>
  );
};
