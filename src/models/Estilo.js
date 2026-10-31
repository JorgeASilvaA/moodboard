const mongoose = require('mongoose');

const estiloSchema = new mongoose.Schema({
    caracteristica: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Estilo', estiloSchema, 'estilo');