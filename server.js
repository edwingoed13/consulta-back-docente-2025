const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');  // Importar 'path' para manejar rutas correctamente

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir solicitudes desde cualquier origen
app.use(cors());

// Ruta para servir datos de manera segura
app.get('/api/datos', (req, res) => {
    fs.readFile(path.join(__dirname, 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al leer los datos' });
        }

        try {
            const datos = JSON.parse(data); // Convertimos el JSON a un objeto
            res.json(datos); // Enviamos los datos como JSON
        } catch (error) {
            console.error('Error al parsear el JSON:', error);
            res.status(500).json({ error: 'Error al procesar los datos' });
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


