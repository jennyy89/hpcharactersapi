import dotenv from "dotenv";
import colors from "colors";
import express from "express";
import characters from "./api/characters.js";
import cors from "cors";
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import {getAll, addEntry, getOne, edit, delOne,landingAPI}  from './controllersMongo.js'

dotenv.config();

const PORT = process.env.PORT || 3007;
const server = express();

// Middleware: Cors & parse application/x-www-form-urlencoded & application/json & cors
server.use(cors(), express.urlencoded({ extended: false }), bodyParser.json())

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res)=> console.log("Connnected to DB"))
  .catch((error)=> console.log("error"))

server.get("/", landingAPI);
server.use("/api/characters", characters);

server.route("/apiMDB/characters")
  .get(getAll)
  .post(addEntry)

server.route("/apiMDB/characters/:id")
  .get(getOne)
  .put(edit)
  .delete(delOne)

server.listen(PORT, () =>
  console.log(`Server started on Port ${PORT}`.rainbow)
);