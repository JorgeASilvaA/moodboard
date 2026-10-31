const mongoose = require('mongoose');

const inspiracionSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    contenido: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        trim: true
    },
    anio: {
        type: Number
    }
});

module.exports = mongoose.model('Inspiracion', inspiracionSchema, 'inspiracion');