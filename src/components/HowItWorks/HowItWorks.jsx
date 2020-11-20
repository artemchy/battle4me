import React from "react";
import styled from "styled-components";
import ok from "../../assets/ok.png";
import okLg from "../../assets/ok-white.png";
import good from "../../assets/good.png";
import goodLg from "../../assets/good-white.png";
import rocket from "../../assets/rocket.png";
import rocketLg from "../../assets/rocket-white.png";
import play from "../../assets/play.png";
import playLg from "../../assets/play-white.png";
import { useApp } from "../../AppContext";

const Items = styled.ul`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -15px 120px;
`;

const Item = styled.li`
  max-width: calc(25% - 30px);
  padding: 0 15px;
  text-align: center;

  p {
    font-size: 16px;
    line-height: 24px;
    color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
  }
`;

const Title = styled.div`
  margin: 36px 0 12px 0;
  font-size: 1.5rem;
  line-height: 30px;
  color: ${({ lightMode }) => (lightMode ? "#06021d" : "#f2f2f2")};
`;

export const HowItWorks = () => {
  const lightMode = useApp();

  return (
    <section>
      <div className="container">
        <h1 className="title">How it works</h1>
        <p className="subtitle">
          Just 4 simple steps to Winfluence! Give it a shot, you know you want
          to!
        </p>
        <Items>
          <Item lightMode={lightMode}>
            <img src={lightMode ? okLg : ok} alt="" />
            <Title lightMode={lightMode}>Join a Battle</Title>
            <p>
              Pick and choose from a selection of battles and click join to get
              started!
            </p>
          </Item>
          <Item lightMode={lightMode}>
            <img src={lightMode ? playLg : play} alt="" />
            <Title lightMode={lightMode}>Create a Video</Title>
            <p>15 seconds is what you need to create awesomeness!</p>
          </Item>
          <Item lightMode={lightMode}>
            <img src={lightMode ? goodLg : good} alt="" />
            <Title lightMode={lightMode}>Collect Votes</Title>
            <p>
              Share your video to the world and collect votes. The bigger the
              tribe, the better!
            </p>
          </Item>
          <Item lightMode={lightMode}>
            <img src={lightMode ? rocketLg : rocket} alt="" />
            <Title lightMode={lightMode}>Be a Winner!</Title>
            <p>Highest amount of love and votes wins you epic prizes!</p>
          </Item>
        </Items>
      </div>
    </section>
  );
};
