const mongoose = require('mongoose');

const interesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Interes', interesSchema, 'interes');