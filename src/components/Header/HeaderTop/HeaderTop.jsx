import React, { useState } from "react";
import styled from "styled-components";
import toggleButton from "../../../assets/toggle.svg";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { SocialIcons } from "../../SocialIcons/SocialIcons";
import { useDispatch } from "react-redux";
import { changeLenguage } from "../../../redux/app-reducer";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  background: ${({ lightMode }) =>
    lightMode ? "#fff" : "rgba(6, 2, 29, 0.66)"};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;s
`;

const Shops = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 42px;

  li a {
    display: flex;
    align-items: center;
    color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
  }
`;

const Title = styled.span`
  margin-left: 10px;
`;

const Settings = styled.ul`
  display: flex;
  align-items: center;

  li {
    position: relative;
    display: flex;
    align-items: center;
  }
  span {
    color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
    margin-right: 12px;
    cursor: pointer;
  }
`;

const ToggleButton = styled.img`
  cursor: pointer;
  ${({ lightMode }) => lightMode && "transform: rotate(180deg)"};
`;

const Lenguage = styled.div`
  cursor: pointer;
  color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
`;

const LenguageModal = styled.ul`
  background:  ${({ lightMode }) =>
    lightMode ? "rgb(240, 240, 240)" : "rgb(6, 2, 29)"};;
  border: 1px solid #fff;
  position: absolute;
  bottom: -77px;
  left: -35px;
  z-index: 1;

  li {
    padding: 10px 35px;
    transition: background-color 0.3s linear;
    font-size: 0.8rem;
    color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
    cursor: pointer;
    &:hover {
      background-color: ${({ lightMode }) =>
        lightMode ? "rgba(0,0,0, 0.2)" : "rgba(225,225,225, 0.2)"}; r;
    }
  }
`;

export const HeaderTop = ({lightMode, toggle, lenguage}) => {
  const [isShow, setShow] = useState(false);
  const dispatch = useDispatch();
  const selectLenguage = (selectLenguage) => {
    dispatch(changeLenguage(selectLenguage));
    setShow(false);
  };
debugger;
  return (
    <Header lightMode={lightMode}>
      <div className="container">
        <Wrapper>
          <SocialIcons />
          <RightSide>
            <Shops lightMode={lightMode}>
              <li>
                <a href="#s">
                  <span>
                    <FaApple size={18} />
                  </span>
                  <Title>App Store</Title>
                </a>
              </li>
              <span className="divider" />
              <li>
                <a href="#s">
                  <span>
                    <FaGooglePlay size={14} />
                  </span>

                  <Title>Google Play</Title>
                </a>
              </li>
            </Shops>
            <Settings lightMode={lightMode}>
              <li onClick={toggle}>
                {lenguage === "Рус" && lightMode ? <span>Дневной режим</span> : <span>Ночной режим</span> 
                && lenguage === "Eng" && lightMode ? <span>Light Mode</span> : <span>Dark Mode</span>} 
                <ToggleButton src={toggleButton} lightMode={lightMode} alt="" />
              </li>
              <span className="divider" />
              <li onClick={() => setShow(true)}>
                <Lenguage lightMode={lightMode}>{lenguage}</Lenguage>
                {isShow && (
                  <LenguageModal
                    lightMode={lightMode}
                    onMouseLeave={() => setShow(false)}
                  >
                    <li onClick={() => selectLenguage("eng")}>Eng</li>
                    <li onClick={() => selectLenguage("Ru")}>Рус</li>
                  </LenguageModal>
                )}
              </li>
            </Settings>
          </RightSide>
        </Wrapper>
      </div>
    </Header>
  );
};
