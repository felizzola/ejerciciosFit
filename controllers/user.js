const ejercicios = require('../data/user');


async function addUser(user) {
    return ejercicios.addEjercicio(ejercicio);
}

async function updateEjercicio(id, ejercicio) {
    return ejercicios.updateEjercicio(id, ejercicio);
}

async function deleteEjercicio(id) {
    return ejercicios.deleteEjercicio(id);
}

module.exports = { addUser, deleteEjercicio, updateEjercicio };