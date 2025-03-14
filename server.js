const express = require('express');
const cors = require('cors');
const path = require('path');  // Importar 'path' para manejar rutas correctamente

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir solicitudes desde cualquier origen
app.use(cors());

// Ruta para servir el archivo JSON
app.get('/api/datos', (req, res) => {
    res.sendFile(path.join(__dirname, 'datos.json'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

