import React from "react";
import Slider from "react-slick";
import { Cart } from "../../Cart/Cart";
import "./CurrentBattle.module.scss";

export const CurrentBattle = () => {
  const settings = {
    className: "current__slider",
    slidesToshow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {[...Array(2)].map((item, i) => (
        <Cart key={i} />
      ))}
    </Slider>
  );
};
