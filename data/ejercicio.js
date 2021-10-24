const connection = require('./connection');
const ObjectId = require('mongodb').ObjectId; 

async function getEjercicios(){
    const clientmongo = await connection.getConnection();
    const ejercicios = await clientmongo.db('ejercicios_fit')
                        .collection('ejercicios')
                        .find()
                        .toArray();
    return ejercicios;                    
}

async function getEjercicio(id){
    const clientmongo = await connection.getConnection();
    const o_id = new ObjectId(id);
    const ejercicio = await clientmongo.db('ejercicios_fit')
                        .collection('ejercicios')
                        .findOne({_id:o_id});
    return ejercicio;                    
}


module.exports = {getEjercicios, getEjercicio};