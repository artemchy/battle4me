import React from "react";
import classes from "../Intro/Intro.module.scss";
import homeBg from "../../assets/home-bg.png";
import homeBgLight from "../../assets/homeBgLight.jpg";
import { useApp } from "../../AppContext";
import { useSelector } from "react-redux";
import { getLenguage } from "../../redux/selectors";

export const Intro = () => {
  const lightmode = useApp();
  const lenguage = useSelector(getLenguage);
  return (
    <section
      className={classes.intro}
      style={{
        backgroundImage: lightmode ? `url(${homeBgLight})` : `url(${homeBg})`,
      }}
    >
      <div className={classes.body}>
        <h1 className={classes.suptitle}>
          {lenguage === "Eng"
            ? "Record-Vote-Win-Repeat."
            : "Создавай. Голосуй. Побеждай!"}
        </h1>
        <h2 className={classes.title}>
          {lenguage === "Eng"
            ? "Upload a 15 second video and compete!"
            : "Загрузи 15-секундное видео и выигрывай призы!"}{" "}
        </h2>
        <div className={classes.subtitle}>
          <div>
            <p>
              {lenguage === "Eng"
                ? "Select cool brands, join awesome video challenges and win rewards for creating catchy content!"
                : "Выбирай актуальные темы и присоединяйся к видео-баттлам, чтобы получить награду за свой контент, способный изменить мир!"}
            </p>
          </div>
          <div>
            <p>
              {lenguage === "Eng"
                ? "Sign up to become a part of out battle4.me tribe and Winfluence big time!"
                : "Регистрируйся и побеждай вместе с battle4.me!"}
            </p>
          </div>
        </div>
        <div className="center">
          <button className="btn__style1 large">
            {lenguage === "Eng" ? "Learn to battle" : "Как участвовать"}
          </button>
        </div>
      </div>
    </section>
  );
};
