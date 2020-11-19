import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { Cart } from "../Cart/Cart";

export const Popular = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    className: "slides",
  };
  return (
    <section>
      <div className="container sl-popular">
        <h1 className="title">Most Popular Videos</h1>
        <p className="subtitle">
          Want to know what makes a good video? Or maybe you just need some
          #Inspo? Check out videos of our popular battlers!
        </p>
        <Slider {...settings}>
          {[...Array(7)].map((item, i) => (
            <Cart key={i} />
          ))}
        </Slider>
        <div className="center">
          <NavLink to="/allvideos">
            <button className="btn__style3">See more</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
