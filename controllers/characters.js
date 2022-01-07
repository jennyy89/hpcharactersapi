import db from "../dbinit.js";

const getCharacters = async (req, res) => {
  try {
    const characters = await db.query("SELECT * FROM hpchar;");
    res.json(characters.rows);
  } catch (err) {
    console.log(err);
  }
};

const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await db.query("SELECT * FROM hpchar WHERE id=$1;", [id]);
    res.json(character.rows);
  } catch (err) {
    console.log(err);
  }
};

const addCharacter = async (req, res) => {
  try {
    const hpchar = await db.query(
      "INSERT INTO hpchar (name, image, gender) VALUES ($1, $2, $3)",
      [name, image, gender]
    );
    res.json({ msg: "New character successfully added" });
  } catch (err) {
    console.log(err);
  }
};

export { getCharacters, getCharacter, addCharacter };
