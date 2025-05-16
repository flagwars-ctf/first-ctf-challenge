import express from "express";
import { urlencoded, json } from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import blockchainRouter from "./routes/blockchain-router";

const main = async () => {
  dotenv.config();

  const app = express();
  app.use(cors());
  app.use(urlencoded({ extended: true }));
  app.use(json());

  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "First CTF Competition",
        version: "1.0.0",
        description: "Good Luck! Have Fun! 🚩",
      },
    },
    apis: ["./src/routes/*.ts"],
  };
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  // router configuration
  app.use("/", blockchainRouter);

  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
};

main();
