const express = require('express');
var router = express.Router();
const controller = require('../controllers/ejercicio');
const auth = require('../middleware/auth')

/* OTRA FORMA PROBANDO */
router.get('/', async (req, res) => {
  try {
    let dificultad = req.query.dificultad;
    let tipo = req.query.tipo;

    if (dificultad && !tipo) {
      let ejerciciosFiltrados = await controller.getEjerciciosPorDificultad(dificultad);

      ejerciciosFiltrados.length ? res.json(ejerciciosFiltrados) : res.status(404).json([]);
    }
    else if (tipo && !dificultad) {
      let ejerciciosFiltrados = await controller.getEjerciciosPorTipo(tipo);

      ejerciciosFiltrados.length ? res.json(ejerciciosFiltrados) : res.status(404).json([]);
    }
    else if (dificultad && tipo) {
      let ejerciciosFiltrados = await controller.getEjerciciosPorTipoYDificultad(tipo, dificultad);

      ejerciciosFiltrados.length ? res.json(ejerciciosFiltrados) : res.status(404).json([]);
    } else {
      let ejercicios = await controller.getEjercicios();

      ejercicios.length ? res.json(ejercicios) : res.status(404).json([]);
    }
  } catch (error) {
    console.log(error.message);
    
    res.status(500).json([]);
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    let ejercicios = await controller.getEjercicio(req.params.id);
    ejercicios.length ? res.json(ejercicios) : res.status(404).json([]);
  } catch (error) {
    console.log(error.message);
    res.status(500).json([]);
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const result = await controller.addEjercicio(req.body);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ 'error': error.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const result = await controller.updateEjercicio(req.params.id, req.body);
    result.matchedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ 'error': error.message });
  }
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

module.exports = router;
