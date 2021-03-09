import express from "express";
import corsMiddleware from "./cors";
import routerMiddleware from "./router";

const app = express().use(corsMiddleware()).use(routerMiddleware());

export default app;
