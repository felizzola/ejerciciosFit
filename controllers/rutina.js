const rutinas = require('../data/rutina');

async function getrutinas() {
    return rutinas.getAllrutinas();
}

async function getrutina(id) {
    return rutinas.getrutina(id);
}

async function getrutinasPorUser() {
    /*const query_st = {...dificultad && {"dificultad": dificultad} }*/

    return rutinas.getrutinas(query_st);
}

async function addrutina(rutina) {
    return rutinas.addrutina(rutina);
}

async function updaterutina(id, rutina) {
    return rutinas.updaterutina(id, rutina);
}

async function deleterutina(id) {
    return rutinas.deleterutina(id);
}

module.exports = { getrutina, getrutinas, getrutinasPorUser, addrutina, deleterutina, updaterutina };