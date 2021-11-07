const connection = require('./connection');
const ObjectId = require('mongodb').ObjectId; 

const DATABASE = 'ejercicios_fit';
const COLLECTION_RUTINAS = 'rutinas';

async function getAllRutinas(){
    const clientmongo = await connection.getConnection();

    const rutinas = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_RUTINAS)
                        .toArray();
    return rutinas;                    
}

async function getRutinas(query_st){
    const clientmongo = await connection.getConnection();

    const rutinas = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_RUTINAS)
                        .find(query_st)
                        .toArray();
    return rutinas;                    
}

async function getRutina(id){
    const clientmongo = await connection.getConnection();
    const o_id = new ObjectId(id);
    const favorito = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_RUTINAS)
                        .findOne({_id:o_id});
    return favorito;                    
}


async function addRutina(rutina){
    const connectiondb = await connection.getConnection();
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_RUTINAS)
            .insertOne(rutina);
    return result;
}

async function updateRutina(id, rutina){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_RUTINAS)
            .updateOne({_id:o_id}, {$set: rutina});
    return result;
}

async function deleteRutina(id){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_RUTINAS)
            .deleteOne({_id:o_id});
    return result;
}

module.exports = {getRutinas, getAllRutinas, getRutina, addRutina, updateRutina, deleteRutina};
