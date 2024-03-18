/*
mi-api/
├── index.js
├── db.js
├── models/
│   └── cliente.js
├── controllers/
│   └── clienteController.js
├── routes/
│   └── clienteRoutes.js
├── test/
│   └── cliente.test.js
├── package.json
└── (otros archivos, si los tienes)
 */

// index.js
const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes'); // Asegúrate de que la ruta sea correcta

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Rutas para clientes
app.use('/api', clienteRoutes); // Cambia '/api' por la ruta que desees

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


