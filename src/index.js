const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(express.json());

const perfilRoute = require('./routes/perfilRoute');
const obrasRoute = require('./routes/obrasRoute');
const interesesRoute = require('./routes/interesesRoute');
const estiloRoute = require('./routes/estiloRoute');
const inspiracionesRoute = require('./routes/inspiracionesRoute');

app.get('/', (req, res) => {
    res.send('API Moodboard personal de Marié');
});

app.use('/api/perfil', perfilRoute);
app.use('/api/obras', obrasRoute);
app.use('/api/intereses', interesesRoute);
app.use('/api/estilo', estiloRoute);
app.use('/api/inspiraciones', inspiracionesRoute);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexión exitosa a MongoDB Atlas');
        app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
    })
    .catch(error => console.error('Error de conexión:', error.message));
