const connection = require('./connection');
const ObjectId = require('mongodb').ObjectId; 

const DATABASE = 'ejercicios_fit';
const COLLECTION_EJERCICIOS = 'ejercicios';

async function getEjercicios(){
    const clientmongo = await connection.getConnection();
    const ejercicios = await clientmongo.db(DATABASE)
                        .collection(COLLECTION_EJERCICIOS)
                        .find()
                        .toArray();
    return ejercicios;                    
}

async function addEjercicio(ejercicio){
    const connectiondb = await connection.getConnection();
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_EJERCICIOS)
            .insertOne(ejercicio);
    return result;
}

async function updateEjercicio(id, ejercicio){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_EJERCICIOS)
            .updateOne({_id:o_id}, {$set: ejercicio});
    return result;
}

async function deleteEjercicio(id){
    const connectiondb = await connection.getConnection();
    const o_id = new ObjectId(id);
    const result = connectiondb.db(DATABASE)
            .collection(COLLECTION_EJERCICIOS)
            .deleteOne({_id:o_id});
    return result;
}

module.exports = {getEjercicios, addEjercicio, updateEjercicio, deleteEjercicio};