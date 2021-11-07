const favoritos = require('../data/favorito');

async function getfavoritos() {
    return favoritos.getAllfavoritos();
}

async function getfavorito(id) {
    return favoritos.getfavorito(id);
}

async function getfavoritosPorUser() {
    /*const query_st = {...dificultad && {"dificultad": dificultad} }*/

    return favoritos.getfavoritos(query_st);
}

async function addfavorito(favorito) {
    return favoritos.addfavorito(favorito);
}

async function updatefavorito(id, favorito) {
    return favoritos.updatefavorito(id, favorito);
}

async function deletefavorito(id) {
    return favoritos.deletefavorito(id);
}

module.exports = { getfavorito, getfavoritos, getfavoritosPorUser, addfavorito, deletefavorito, updatefavorito };