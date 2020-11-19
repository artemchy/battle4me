import React from "react";
import styled from "styled-components";
import { useApp } from "../../AppContext";
import watch from "../../assets/time.svg";

const Wrapper = styled.div`
  padding: 0 15px;
`;

const CartVideo = styled.div`
  background: ${({ img }) => (img ? `url(${img})` : "#fff")};
  height: 200px;
  border-radius: 8px 8px 0 0;
`;
const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  padding: 24px;
  border-radius: 0 0 4px 4px;
  background-color: ${({ lightMode }) => (lightMode ? "#fff" : "#131229")};


  h4 {
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 27px;
    color: #f2f2f2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  a {
    color: #15c9ff;
  }
`;

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 73px;
  font-weight: 700;
  padding: 3px 10px;
  border: none;
  border-radius: 17px;
  background: #23203a;
  color: #15c9ff;
  text-transform: uppercase;
  line-height: 24px;
`;

export const Cart = ({ img }) => {

  const lightMode = useApp();
  return (
    <Wrapper>
      <CartVideo img={img}></CartVideo>
      <CartInfo lightMode={lightMode}>
        <h4>The Winfluencer Challenge!</h4>
        <div>
          Organizer: <a href="#s">instagram.com/label_monk/</a>
        </div>
        <CartFooter>
          <LeftSide>
            <img src={watch} alt="time" />
            <span>Finished</span>
          </LeftSide>
          <Price>3000 Rub</Price>
        </CartFooter>
      </CartInfo>
    </Wrapper>
  );
};
