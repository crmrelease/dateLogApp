import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Test from "../pages/test/test";
import RestAPITest from "../pages/restAPITest/restAPITest";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Test} />
      <Route exact={true} path="/restAPITest" component={RestAPITest} />
    </BrowserRouter>
  );
};

export default Router;
