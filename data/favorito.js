const connection = require('./connection');
const ObjectId = require('mongodb').ObjectId; 

const DATABASE = 'favoritos_fit';
const COLLECTION_favoritos = 'favoritos';

async function getAllfavoritos(){
    const clientmongo = await connection.getConnection();

    const favoritos = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_favoritos)
                        .toArray();
    return favoritos;                    
}

async function getfavoritos(query_st){
    const clientmongo = await connection.getConnection();

    const favoritos = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_favoritos)
                        .find(query_st)
                        .toArray();
    return favoritos;                    
}

async function getfavorito(id){
    const clientmongo = await connection.getConnection();
    const o_id = new ObjectId(id);
    const favorito = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_favoritos)
                        .findOne({_id:o_id});
    return favorito;                    
}


async function addfavorito(favorito){
    const connectiondb = await connection.getConnection();
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_favoritos)
            .insertOne(favorito);
    return result;
}

async function updatefavorito(id, favorito){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_favoritos)
            .updateOne({_id:o_id}, {$set: favorito});
    return result;
}

async function deletefavorito(id){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_favoritos)
            .deleteOne({_id:o_id});
    return result;
}

module.exports = {getfavoritos, getAllfavoritos, getfavorito, addfavorito, updatefavorito, deletefavorito};
