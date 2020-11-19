import React from "react";
import classes from "../Intro/Intro.module.scss";
import homeBg from "../../assets/home-bg.png"
import homeBgLight from "../../assets/homeBgLight.jpg"
import { useApp } from "../../AppContext";

export const Intro = () => {
  const lightmode = useApp()
  return (
    <section className={classes.intro} style={{ backgroundImage: lightmode ? `url(${homeBgLight})` : `url(${homeBg})`}}>
      <div className={classes.body}>
        <h1 className={classes.suptitle}>Record-Vote-Win-Repeat.</h1>
        <h2 className={classes.title}>Upload a 15 second video and compete!</h2>
        <div className={classes.subtitle}>
          <div>
            <p>
              Select cool brands, join awesome video challenges and win rewards
              for creating catchy content!
            </p>
          </div>
          <div>
            <p>
              Sign up to become a part of out battle4.me tribe and Winfluence
              big time!
            </p>
          </div>
        </div>
        <div className="center">
          <button className="btn__style1 large">Learn to battle</button>
        </div>
      </div>
    </section>
  );
};
