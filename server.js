import dotenv from "dotenv";
import colors from "colors";
import express from "express";
import characters from "./api/characters.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3007;
const server = express();

server.use(cors());

server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to the HP world"));
server.use("/api/characters", characters);

server.listen(PORT, () =>
  console.log(`Server started on Port ${PORT}`.rainbow)
);
