import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
import { NOTES_ROUTE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={NOTES_ROUTE}/>
    </Switch>
  );
};

export default AppRouter;
