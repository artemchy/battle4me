import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppProvider } from "./AppContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <AppProvider>
         <App />
       </AppProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);
