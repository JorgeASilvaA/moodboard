const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    seudonimo: {
        type: String,
        trim: true
    },
    profesion: {
        type: String,
        required: true,
        trim: true
    },
    area: {
        type: String,
        trim: true
    },
    experiencia_docente_anios: {
        type: Number
    },
    experiencia_desarrollo_anios: {
        type: Number
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Perfil', perfilSchema, 'perfil');
