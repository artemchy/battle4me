import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppToggleContext = createContext();

export const useApp = () => useContext(AppContext);
export const useAppToggle = () => useContext(AppToggleContext);

export const AppProvider = ({ children }) => {
  const [isLightMode, setMode] = useState(false);
  const toggle = () => setMode((prev) => !prev);
  return (
    <AppContext.Provider value={isLightMode}>
      <AppToggleContext.Provider value={toggle}>
        { children }
      </AppToggleContext.Provider>
    </AppContext.Provider>
  );
};
