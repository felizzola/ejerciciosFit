const express = require('express');
var router = express.Router();
const controller = require('../controllers/Favorito');
const auth = require('../middleware/auth')

/* OTRA FORMA PROBANDO */
router.get('/', async (req, res) => {
    try {
        console.log('NOT IMPLEMENTED: Favorito GET');
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json([]);
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        let Favoritos = await controller.getFavorito(req.params.id);
        Favoritos.length ? res.json(Favoritos) : res.status(404).json([]);
    } catch (error) {
        console.log(error.message);
        res.status(500).json([]);
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const result = await controller.addFavorito(req.body);
        res.send(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const result = await controller.updateFavorito(req.params.id, req.body);
        result.matchedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const result = await controller.deleteFavorito(req.params.id);
        result.deletedCount ? res.send(result) : res.status(404).json({ 'error': "id not found" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'error': error.message });
    }
});

module.exports = router;
