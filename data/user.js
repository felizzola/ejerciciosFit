const mongodb = require("mongodb");
const connection = require("./connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const DATABASE = "ejercicios_fit";
const COLLECTION_USERS = "users";
const ObjectId = require("mongodb").ObjectId;

async function getUser(id) {
  const clientmongo = await connection.getConnection();
  const o_id = new ObjectId(id);
  const user = await clientmongo
    .db(DATABASE)
    .collection(COLLECTION_USERS)
    .findOne({ _id: o_id });
  return user;
}

async function addUser(user) {
  const connectiondb = await connection.getConnection();
  user.favoritos = [];
  user.plan = [];
  user.activo = true;
  /* user.rol = "usuario"; */
  user.password = await bcrypt.hash(user.password, 8);
  const result = connectiondb
    .db(DATABASE)
    .collection(COLLECTION_USERS)
    .insertOne(user);
  return result;
}
/* validar existencia de usuario y validar password que corresponda */
async function findByCredentials(email, password) {
  const connectiondb = await connection.getConnection();
  const user = await connectiondb
    .db(DATABASE)
    .collection(COLLECTION_USERS)
    .findOne({ email: email });
  if (!user) {
    throw new Error("Credenciales no validas");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Credenciales no validas");
  }
  return user;
}

/* aca puedo enviar ROLES, etc */
function generatedAuthToken(user) {
  const token = jwt.sign(
    { _id: user._id, email: user.email},
    process.env.CLAVE_SECRETA,
    { expiresIn: "1h" }
  );
  return token;
}

async function deleteUser(id){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_USERS)
            .deleteOne({_id:o_id});
            /* .updateOne({_id:o_id},
              { $set: { "activo": false } }); */
    return result;
}

async function setFavorito(exerciseid, userid) {
  const connectiondb = await connection.getConnection();
  /* validar el ejercicio exista (su id) */
  const user = await connectiondb
    .db(DATABASE)
    .collection(COLLECTION_USERS)
    .findOne({ _id: new ObjectId(userid) });

  let result;
 
    if (user.favoritos.find((exercise) => exercise == exerciseid)) {
      result = connectiondb
        .db(DATABASE)
        .collection(COLLECTION_USERS)
        .updateOne(
          { _id: new ObjectId(userid) },
          { $pull: { "favoritos": exerciseid } }
        );
    } else {
      result = connectiondb
        .db(DATABASE)
        .collection(COLLECTION_USERS)
        .updateOne(
          { _id: new ObjectId(userid) },
          { $addToSet: { "favoritos": exerciseid } }
        );
    }
  return result;
}

module.exports = {
  addUser,
  findByCredentials,
  generatedAuthToken,
  setFavorito,
  getUser,
  deleteUser
};
