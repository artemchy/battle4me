import React from "react";
import { Route, Switch } from "react-router-dom";
import { useApp } from "./AppContext";
import { About } from "./components/About/About";
import { ArrowTop } from "./components/ArrowTop/ArrowTop";
import { BattlePage } from "./components/Battle/Battle";
import { Contacts } from "./components/Contacts/Contacts";
import { Filters } from "./components/Filters/Filters";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Intro } from "./components/Intro/Intro";
import { Login } from "./components/Login/Login";
import { Popular } from "./components/Popular/Popular";



export const App = () => {
  const lightMode = useApp()

  return (
      <div className={lightMode ? "App ligthMode" : "App"}>
        <Header />
        <ArrowTop />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/">
            <Intro />
            <Filters />
            <BattlePage />
            <Popular />
            <HowItWorks />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
};
