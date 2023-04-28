/// <reference types="react-scripts" />
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Routes } from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux";
import { AuthContextProvider, ThemeContextProvider } from "./provider";
import "./index.css";
import "src/services/i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </ThemeContextProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
