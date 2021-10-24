const express = require('express');
const router = express.Router();
const data = require('../data/ejercicio');

router.get('/', async (req, res) =>{
    let ejercicios = await data.getEjercicios();

    res.json(ejercicios);
});

router.post('/', async (req, res)=>{
    const result = await data.addEjercicio(req.body);
    res.send(result);
  });

router.put('/:id', async (req, res)=>{
  const result = await data.updateEjercicio(req.params.id, req.body);
  res.send(result);
});

router.delete('/:id', async (req, res)=>{
  const result = await data.deleteEjercicio(req.params.id);
  res.send(result);
});

//CRUD: 

//get /:id
//get /:tipo
//get /:dificultad

//post / --> (esto es el alta)

//put /:id -->(para actualizar): router.put or router.patch

//detele /:id

module.exports = router;
