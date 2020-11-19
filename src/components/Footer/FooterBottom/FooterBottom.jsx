import React from "react";
import styled from "styled-components";
import { SocialIcons } from "../../SocialIcons/SocialIcons";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
`;

const FooterBottomStyle = styled.div`
  background: ${({ lightMode }) => (lightMode ? "#414141" : "#050224")};
`;

export const FooterBottom = ({ lightMode }) => {
  return (
    <FooterBottomStyle lightMode={lightMode}>
      <div className="container">
        <Wrapper>
          <div>
            <span>Battle4.me GmbH</span>
            <p>"The Social. Video. Challenge!"</p>
          </div>
          <SocialIcons />
        </Wrapper>
      </div>
    </FooterBottomStyle>
  );
};
