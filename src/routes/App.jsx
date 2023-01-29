import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Header } from "../components/Header";
import Login from "../auth/Login";
import "../i18n/i18next";
import "../style/style.css";

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");

  const handleToggleMode = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode]);

  useEffect(() => {
    document.body.className = mode === "light" ? "bg-light" : "bg-dark";

    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <BrowserRouter>
      <Header mode={mode} toggleMode={handleToggleMode} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
