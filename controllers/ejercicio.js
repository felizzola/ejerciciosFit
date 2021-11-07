const ejercicios = require('../data/ejercicio');

async function getEjercicios() {
    return ejercicios.getAllEjercicios();
}

async function getEjercicio(id) {
    return ejercicios.getEjercicio(id);
}

async function getEjerciciosPorDificultad(dificultad) {
    const query_st = {...dificultad && {"dificultad": dificultad} }

    return ejercicios.getEjercicios(query_st);
}

async function getEjerciciosPorTipo(tipo) {
    const query_st = {...tipo && {"tipo": tipo}}

    return ejercicios.getEjercicios(query_st);
}

async function getEjerciciosPorTipoYDificultad(tipo, dificultad) {
    const query_st = {...tipo && {"tipo": tipo},
                      ...dificultad && {"dificultad": dificultad} }

    return ejercicios.getEjercicios(query_st);
}

async function addEjercicio(ejercicio) {
    return ejercicios.addEjercicio(ejercicio);
}

async function updateEjercicio(id, ejercicio) {
    return ejercicios.updateEjercicio(id, ejercicio);
}

async function deleteEjercicio(id) {
    return ejercicios.deleteEjercicio(id);
}

module.exports = { getEjercicio, getEjercicios, getEjerciciosPorTipoYDificultad, getEjerciciosPorDificultad, getEjerciciosPorTipo, addEjercicio, deleteEjercicio, updateEjercicio };