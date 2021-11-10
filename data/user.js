const ObjectId = require('mongodb').ObjectId; 
const connection = require('./connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const DATABASE = 'ejercicios_fit';
const COLLECTION_USERS = 'users';

async function addUser(user) {
    const connectiondb = await connection.getConnection();
    user.password = await bcrypt.hash(user.password, 8);
    const result = await connectiondb.db(DATABASE)
        .collection(COLLECTION_USERS)
        .insertOne(user);

    if (!user) {
        throw new Error('Credenciales no validas');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Credenciales no validas');
    }
    return result;
}

async function findByCredentials(email, password) {
    const connectiondb = await connection.getConnection();
    const user = await connectiondb
        .db(DATABASE)
        .collection(COLLECTION_USERS)
        .findOne({ email: email });
    if (!user) {
        throw new Error('Credenciales no validas');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Credenciales no validas');
    }

    return user;
}

function generatedAuthToken(user) {
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.CLAVE_SECRETA, { expiresIn: '1h' });
    return token;
}

async function updateUser(id, user){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_USERS)
            .updateOne({_id:o_id}, {$set: user});
    return result;
}

module.exports = { addUser, findByCredentials, generatedAuthToken, updateUser };