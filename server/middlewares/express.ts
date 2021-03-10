import express from "express";
import corsMiddleware from "./cors";
// import routerMiddleware from "./router";

//const app = express().use(corsMiddleware()).use(routerMiddleware());

const app = express().use(corsMiddleware());
export default app;
