import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreatePoint } from "../pages/CreatePoint";
import { Success } from "../pages/Success";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Success} path="/success" />
    </BrowserRouter>
  );
};
