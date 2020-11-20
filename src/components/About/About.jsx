import React from "react";
import classes from "./About.module.scss";
import { useApp } from "../../AppContext";
import pic1 from "../../assets/about-01.jpg";
import pic2 from "../../assets/about-02.jpg";
import pic3 from "../../assets/about-03.jpg";
import pic4 from "../../assets/about-04.jpg";


export const About = () => {
  const lightMode = useApp();
  return (
    <div className={classes.about}>
      <h1 className={classes.title}>
        What is Battle4.me?
      </h1>
      <div className={classes.subtitle}>
        Battle4.me is a platform for users to challenge their creativity through
        video battles and get rewarded for their popular content.
      </div>
      <div className="container">
        <div className="subtitle pt-16">
          For brands, Battle4.me is a great opportunity to showcase products and
          services, while encouraging users to win them through their authentic
          videos!
        </div>
        <div className="subtitle pt-16">
          All it takes is 15 seconds, a phone, some inspiration and voilà…
        </div>
        <div className="subtitle pt-16">
          Become a Winfluencer just like that!
        </div>
      </div>
      <div className="container">
        <div className={classes.pictures}>
          <div className={classes.col}>
            <div className={classes.item}>
              <img src={pic1} alt="" />
            </div>
            <div className={classes.item}>
              <img src={pic3} alt="" />
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.item}>
              <img src={pic2} alt="" />
            </div>
            <div className={classes.item}>
              <div className={classes.pink}>15 second video</div>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.item}>
              <div className={classes.blue}>Epic prizes</div>
            </div>
            <div className={classes.item}>
              <img src={pic4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
