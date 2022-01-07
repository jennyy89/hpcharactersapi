import express from "express";
import {
  getCharacters,
  getCharacter,
  addCharacter,
} from "../controllers/characters.js";

const api = express.Router();

api.route("/").get(getCharacters).post(addCharacter);

api.route("/:id").get(getCharacter);

export default api;
