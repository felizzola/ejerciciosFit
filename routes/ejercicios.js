const express = require('express');
const router = express.Router();
const data = require('../data/ejercicio');

router.get('/', async (req, res) =>{
    let ejercicios = await data.getEjercicios();

    res.json(ejercicios);
});


router.get('/:id', async (req, res) =>{
    let ejercicios = await data.getEjercicio(req.params.id);

    res.json(ejercicios);
});

//CRUD: 

//get /:id
//get /:tipo
//get /:dificultad

//post / --> (esto es el alta)

//put /:id -->(para actualizar): router.put or router.patch

//detele /:id

module.exports = router;
