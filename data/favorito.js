const connection = require('./connection');
const ObjectId = require('mongodb').ObjectId; 

const DATABASE = 'ejercicios_fit';
const COLLECTION_FAVORITOS = 'favoritos';

async function getAllFavoritos(){
    const clientmongo = await connection.getConnection();

    const favoritos = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_FAVORITOS)
                        .toArray();
    return favoritos;                    
}

async function getFavoritos(query_st){
    const clientmongo = await connection.getConnection();

    const favoritos = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_FAVORITOS)
                        .find(query_st)
                        .toArray();
    return favoritos;                    
}

async function getFavorito(id){
    const clientmongo = await connection.getConnection();
    const o_id = new ObjectId(id);
    const favorito = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_FAVORITOS)
                        .findOne({_id:o_id});
    return favorito;                    
}


async function addFavorito(favorito){
    const connectiondb = await connection.getConnection();
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_FAVORITOS)
            .insertOne(favorito);
    return result;
}

async function updateFavorito(id, favorito){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_FAVORITOS)
            .updateOne({_id:o_id}, {$set: favorito});
    return result;
}

async function deleteFavorito(id){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_FAVORITOS)
            .deleteOne({_id:o_id});
    return result;
}

module.exports = {getFavoritos, getAllFavoritos, getFavorito, addFavorito, updateFavorito, deleteFavorito};
