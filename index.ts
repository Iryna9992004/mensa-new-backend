import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

const app: Application = express();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT.toString()}`);
});
