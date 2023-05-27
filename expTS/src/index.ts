import express from "express";
import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Web Academy");
});

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
