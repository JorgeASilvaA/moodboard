const express = require('express');
const router = express.Router();
const Modelo = require('../models/Obra');

// CREATE: registrar
router.post('/', async (req, res) => {
    try {
        const nuevo = await Modelo.create(req.body);
        res.status(201).json({ mensaje: 'Obras registrado correctamente', datos: nuevo });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar', error: error.message });
    }
});

// READ: consultar todos
router.get('/', async (req, res) => {
    try {
        const datos = await Modelo.find();
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ: consultar por ID
router.get('/:id', async (req, res) => {
    try {
        const dato = await Modelo.findById(req.params.id);
        if (!dato) return res.status(404).json({ mensaje: 'Registro no encontrado' });
        res.json(dato);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// UPDATE: actualizar por ID
router.put('/:id', async (req, res) => {
    try {
        const dato = await Modelo.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });
        if (!dato) return res.status(404).json({ mensaje: 'Registro no encontrado' });
        res.json({ mensaje: 'Registro actualizado', datos: dato });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE: eliminar por ID
router.delete('/:id', async (req, res) => {
    try {
        const dato = await Modelo.findByIdAndDelete(req.params.id);
        if (!dato) return res.status(404).json({ mensaje: 'Registro no encontrado' });
        res.json({ mensaje: 'Registro eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
