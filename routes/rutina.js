const express = require('express');
var router = express.Router();
const controller = require('../controllers/Rutina');
const auth = require('../middleware/auth')

/* OTRA FORMA PROBANDO */
router.get('/', async (req, res) => {
    try {
        console.log('NOT IMPLEMENTED: Rutina GET');
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json([]);
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        let Rutinas = await controller.getRutina(req.params.id);
        Rutinas.length ? res.json(Rutinas) : res.status(404).json([]);
    } catch (error) {
        console.log(error.message);
        res.status(500).json([]);
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const result = await controller.addRutina(req.body);
        res.send(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const result = await controller.updateRutina(req.params.id, req.body);
        result.matchedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const result = await controller.deleteRutina(req.params.id);
        result.deletedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

module.exports = router;
