const ObjectId = require("mongodb").ObjectId;

/* Envuelve en un try catch la creación de un ObjectId para filtrar los inputs inválidos (no respetan el formato) */
function parseObjectId(id) {
  try {
    return new ObjectId(id);
  } catch {
    return;
  }
}

module.exports = parseObjectId;
