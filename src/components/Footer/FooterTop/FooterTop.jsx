import React from "react";
import styled from "styled-components";

const FooterTopStyles = styled.div`
  background: ${({ lightMode }) => (lightMode ? "#f0f0f0" : "#191831")};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 11px;

  a {
    font-size: 14px;
    line-height: 18px;
    color: ${({ lightMode }) => (lightMode ? "#767678" : "#f2f2f2")};
  }
`;
const Divider = styled.span`
  width: 1px;
  height: 40px;
  background: rgba(156, 153, 174, 0.65);
`;

export const FooterTop = ({ lightMode }) => {
  return (
    <FooterTopStyles lightMode={lightMode}>
      <div className="container">
        <Wrapper lightMode={lightMode}>
          <div>
            <p>
              <a href="#s">Privacy Policy</a>
            </p>
            <p>
              <a href="#s">General Terms and Conditions</a>
            </p>
          </div>
          <Divider />
          <div>
            <p>
              <a href="#s">About Us</a>
            </p>
            <p>
              <a href="#s">Contact Us</a>
            </p>
          </div>
          <Divider />
          <div>
            <p>
              <a href="#s">User Code of Conduct</a>
            </p>
            <p>
              <a href="#s">Disclaimer</a>
            </p>
          </div>
        </Wrapper>
      </div>
    </FooterTopStyles>
  );
};
