import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Test from "../pages/test/test";
import RestAPITest from "../pages/restAPITest/restAPITest";
import Home from "../pages/home/home";
import DateMap from "../pages/dateMap/dateMap";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/dateMap" component={DateMap} />
      <Route exact={true} path="/graphQLTest" component={Test} />
      <Route exact={true} path="/restAPITest" component={RestAPITest} />
    </BrowserRouter>
  );
};

export default Router;
