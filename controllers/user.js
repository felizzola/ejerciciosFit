const ejercicios = require('../data/user');


async function addUser(user) {
    return ejercicios.addUser(user);
}

async function updateUser(id, user) {
    return ejercicios.updateUser(id, user);
}

async function findByCredentials(email, password) {
    return ejercicios.findByCredentials(email, password);
}

async function generatedAuthToken(user) {
    return ejercicios.generatedAuthToken(user);
}

module.exports = { addUser, findByCredentials, updateUser, generatedAuthToken };