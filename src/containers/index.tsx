import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "./pages";
import About from "./pages/about";

const Containers: FC = () => (
  <Switch>
    <Route exact={true} path="/">
      <Pages />
    </Route>
    <Route exact={true} path="/about">
      <About />
    </Route>
  </Switch>
);

export default Containers;
