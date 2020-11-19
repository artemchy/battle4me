import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrowtop from "../../assets/arrow-top.png";

const Arrow = styled.div`
  position: fixed;
  bottom: 0;
  right: 200px;
  opacity: ${({ showScroll }) => (showScroll ? "0.5" : "0")};
  transition: 0.4s;
  visibility: ${({ showScroll }) => (showScroll ? "visible" : "hidden")};
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  &:hover {
    opacity: 1;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

export const ArrowTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <Arrow onClick={scrollTop} showScroll={showScroll}>
      <img src={arrowtop} alt="arrowTop" />
    </Arrow>
  );
};
