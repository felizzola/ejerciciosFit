const rutinas = require('../data/rutina');

async function getRutinas() {
    return rutinas.getAllRutinas();
}

async function getRutina(id) {
    return rutinas.getRutina(id);
}

async function getRutinasPorUser() {
    /*const query_st = {...dificultad && {"dificultad": dificultad} }*/

    return rutinas.getRutinas(query_st);
}

async function addRutina(rutina) {
    return rutinas.addRutina(rutina);
}

async function updateRutina(id, rutina) {
    return rutinas.updateRutina(id, rutina);
}

async function deleteRutina(id) {
    return rutinas.deleteRutina(id);
}

module.exports = { getRutina, getRutinas, getRutinasPorUser, addRutina, deleteRutina, updateRutina };