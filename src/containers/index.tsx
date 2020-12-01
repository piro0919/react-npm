import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "./pages";

const Containers: FC = () => (
  <Switch>
    <Route exact={true} path="/">
      <Pages />
    </Route>
  </Switch>
);

export default Containers;
