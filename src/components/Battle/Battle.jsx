import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { useApp } from "../../AppContext";
import { getLenguage } from "../../redux/selectors";
import { AllBattle } from "./All/AllBattle";
import "./Battle.scss";
import { CurrentBattle } from "./Current/CurrentBattle";
import { PastBattle } from "./Past/PastBattle";

export const BattlePage = () => {
  const lightMode = useApp();
  const lenguage = useSelector(getLenguage);
  return (
    <section>
      <div className="container">
        <h1 className="title">{lenguage === "Eng" ? "Battle" : "Баттлы"}</h1>
        <p className="subtitle">
          Use the best of your talent and imagination to create captivating
          short videos that win you epic prizes!
        </p>
        <div className={lightMode ? "battle__tabs lightMode" : "battle__tabs"}>
          <NavLink to="/battle/all" activeClassName="activeLink">
            All
          </NavLink>
          <NavLink to="/battle/current" activeClassName="activeLink">
            Current
          </NavLink>
          <NavLink to="/battle/past" activeClassName="activeLink">
            Past
          </NavLink>
        </div>
        <span className="underLine" />
        <Route path="/battle/all" component={AllBattle} />
        <Route path="/battle/current" component={CurrentBattle} />
        <Route path="/battle/past" component={PastBattle} />
      </div>
    </section>
  );
};
