import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Test from "../pages/test/test";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Test} />
    </BrowserRouter>
  );
};

export default Router;
