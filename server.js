const express = require('express');
const cors = require('cors');
const datos = require('./datos.json');  // Importamos el archivo JSON

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir solicitudes desde cualquier origen
app.use(cors());

// Ruta para servir el archivo JSON
app.get('/api/datos', (req, res) => {
    res.json(datos);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
