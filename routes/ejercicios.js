const express = require('express');
var router = express.Router();
<<<<<<< HEAD
const controller = require('../controllers/ejercicio');
const auth = require('../middleware/auth')
=======
const data = require('../data/ejercicio');
const auth = require('../middleware/auth');
const authadmin = require('../middleware/authadmin');
const adminvalidador = [auth, authadmin];
>>>>>>> origin/copymaster

router.get('/', auth, async (req, res) =>{
  try {
    let ejercicios = await controller.getEjercicio(req.params.id);
    ejercicios.length ? res.json(ejercicios) : res.status(404).json([]);
  } catch (error) {
    console.log(error.message);
    res.status(500).json([]);
  }
});

router.get('/', auth, async (req, res) =>{
  let ejercicios = await data.getAllEjercicios();
  res.json(ejercicios);
});

<<<<<<< HEAD
router.get('/', auth, async (req, res) =>{
  let ejercicios = await data.getEjerciciosPorDificultad(req.query.dificultad);
  res.json(ejercicios);
});

router.get('/', auth, async (req, res) =>{
  let ejercicios = await data.getEjercicioPorTipo(req.query.tipo);
  res.json(ejercicios);
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const result = await controller.deleteEjercicio(req.params.id);
    result.deletedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ 'error': error.message });
  }
});

=======
router.get('/:id', auth, async (req, res) =>{
  try {
    let ejercicios = await data.getEjercicio(req.params.id);
    ejercicios? res.json(ejercicios) : res.status(404).json({});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({});
  } 
});

router.post('/', adminvalidador, async (req, res)=>{
  try {
    const result = await data.addEjercicio(req.body);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({'error': error.message});
  }
  });

router.put('/:id', adminvalidador, async (req, res)=>{
  try {
      const result = await data.updateEjercicio(req.params.id, req.body);
      result.matchedCount ? res.send(result) : res.status(404).json({'error': "id not found"});
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({'error': error.message});
  }
});

router.delete('/:id', adminvalidador, async (req, res)=>{
  try {
    const result = await data.deleteEjercicio(req.params.id);
    result.deletedCount ? res.send(result) : res.status(404).json({'error': "id not found"});
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({'error': error.message});
  }
}); 

>>>>>>> origin/copymaster
module.exports = router;
