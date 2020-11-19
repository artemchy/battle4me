import React, { useState } from "react";
import "./AllBattle.scss";
import Slider from "react-slick";
import { Cart } from "../../Cart/Cart";
import arrow from "../../../assets/arrow.svg";
import pic1 from "../../../assets/about-01.jpg";
import pic2 from "../../../assets/about-02.jpg";
import pic3 from "../../../assets/about-03.jpg";
import pic4 from "../../../assets/about-04.jpg";
import pic5 from "../../../assets/about-02.jpg";
import pic6 from "../../../assets/about-04.jpg";
import pic7 from "../../../assets/about-01.jpg";

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <img src={arrow} alt="" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <img src={arrow} alt="" />
  </div>
);

export const AllBattle = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "roundabout__all",
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((item, i) => (
          <div
            className={i === imageIndex ? "slide activeSlide" : "slide"}
            key={i}
          >
            <Cart img={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
