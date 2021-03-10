import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import http from "http";
import app from "./middlewares/express";
import colors from "colors";
import testRouter from "./routes/route";
import { connectDatabase } from "./dbconnection";
import dotenv from "dotenv";
const { sequelize } = require("./models");

dotenv.config();
sequelize.sync();
app.use(bodyParser.json());
app.use("/api", testRouter);

const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {},
  },
});

apolloServer.applyMiddleware({
  app,
  cors: false, // Should be false to avoid conflicts with Express CORS middleware
  path: "/graphql",
  bodyParserConfig: { limit: "1000mb" },
});

const startServer = () => {
  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);
  httpServer.listen(4300, () => {
    console.log(
      `✔ Server ready at ${
        colors.blue.bold(process.env.SERVER_DOMAIN ?? "") +
        colors.blue.bold(apolloServer.graphqlPath)
      }`
    );
    console.log(
      `✔ Subscriptions ready at ${
        colors.blue.bold(process.env.WEBSOCKET_SERVER_DOMAIN ?? "") +
        colors.blue.bold(apolloServer.subscriptionsPath ?? "")
      }`
    );
  });
};

startServer();
