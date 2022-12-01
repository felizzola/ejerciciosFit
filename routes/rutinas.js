const express = require("express");
let router = express.Router();
const data = require("../data/rutina");
const auth = require("../middleware/auth");

const RUTINA_NOT_FOUND_ERROR = "No existe esa rutina";
const RUTINA_ALREADY_EXISTS_ERROR = "Ya existe una rutina con ese nombre";

router.get("/:name", auth, async function (req, res) {
  try {
    const result = await data.getRutina(req.params.userid, req.params.name);

    if (!result.nombre) throw { code: 404, message: RUTINA_NOT_FOUND_ERROR };

    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.code ? error.code : 500).json({ error: error.message });
  }
});

router.post("/", auth, async function (req, res) {
  try {
    let rutina = await data.getRutina(req.params.userid, req.body.nombre);

    /* si ya existe la rutina, se devuelve el mensaje de error */
    if (rutina.nombre)
      throw { code: 409, message: RUTINA_ALREADY_EXISTS_ERROR };

    rutina = req.body;
    if (!rutina.dias) rutina.dias = [];
    if (!rutina.ejercicios) rutina.ejercicios = [];

    const result = await data.addRutina(req.params.userid, rutina);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.code ? error.code : 500).json({ error: error.message });
  }
});

router.put("/ejercicios/:name", auth, async function (req, res) {
  try {
    const result = await data.addEjercicios(
      req.params.userid,
      req.params.name,
      req.body.ids
    );

    if (!result.matchedCount)
      throw { code: 404, message: RUTINA_NOT_FOUND_ERROR };

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.code ? error.code : 500).json({ error: error.message });
  }
});

router.delete("/ejercicios/:name", auth, async function (req, res) {
  try {
    const result = await data.removeEjercicios(
      req.params.userid,
      req.params.name,
      req.body.ids
    );

    if (!result.matchedCount)
      throw { code: 404, message: RUTINA_NOT_FOUND_ERROR };

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.code ? error.code : 500).json({ error: error.message });
  }
});

router.delete("/:name", auth, async function (req, res) {
  try {
    const result = await data.deleteRutina(req.params.userid, req.params.name);

    if (!result.modifiedCount)
      throw { code: 404, message: RUTINA_NOT_FOUND_ERROR };

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(error.code ? error.code : 500).json({ error: error.message });
  }
});

module.exports = router;
