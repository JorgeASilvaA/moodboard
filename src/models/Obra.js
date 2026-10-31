const mongoose = require('mongoose');

const obraSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    tecnica: {
        type: String,
        required: true,
        trim: true
    },
    anio: {
        type: Number,
        required: true
    },
    lugar: {
        type: String,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    derechos_reservados: {
        type: Boolean,
        default: false
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Obra', obraSchema, 'obra');
