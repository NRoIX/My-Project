import React, { FC, useCallback, useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { routes } from "./route";
import { App } from "./App";
import { Nav } from "./components/Nav";
import { Login } from "./pages/Login";
import { LOCAL_STORAGE_IS_AUTH_KEY } from "./const";

const getIsAuth = () =>
  !!JSON.parse(localStorage.getItem(LOCAL_STORAGE_IS_AUTH_KEY) ?? "false");

export const Routes: FC = () => {
  const history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getIsAuth);

  const localStorageListener = useCallback(() => {
    setIsAuthenticated(getIsAuth());
  }, []);

  useEffect(() => {
    window.addEventListener("storage", localStorageListener);

    return () => {
      window.removeEventListener("storage", localStorageListener);
    };
  }, [localStorageListener]);

  useEffect(() => {
    if (isAuthenticated) return;

    history.push(routes.auth);
  }, [isAuthenticated, history]);

  return (
    <div>
      <Nav isAuthenticated={isAuthenticated} />
      <Switch>
        <Route path={routes.auth} exact>
          <Login isAuthenticated={isAuthenticated} />
        </Route>
        <Route exact path={routes.home} render={App} />

        {!isAuthenticated && <Redirect to={routes.auth} />}
      </Switch>
    </div>
  );
};
