const favoritos = require('../data/favorito');

async function getFavoritos() {
    return favoritos.getAllFavoritos();
}

async function getFavorito(id) {
    return favoritos.getFavorito(id);
}

async function getFavoritosPorUser() {
    /*const query_st = {...dificultad && {"dificultad": dificultad} }*/

    return favoritos.getFavoritos(query_st);
}

async function addFavorito(favorito) {
    return favoritos.addFavorito(favorito);
}

async function updateFavorito(id, favorito) {
    return favoritos.updateFavorito(id, favorito);
}

async function deleteFavorito(id) {
    return favoritos.deleteFavorito(id);
}

module.exports = { getFavorito, getFavoritos, getFavoritosPorUser, addFavorito, deleteFavorito, updateFavorito };