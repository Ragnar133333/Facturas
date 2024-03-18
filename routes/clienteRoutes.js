// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente'); // Asegúrate de que la ruta sea correcta

// Ruta para crear un nuevo cliente (simulado)
router.post('/clientes', (req, res) => {
  try {
    const { legal_name, tax_id, tax_system, email, address, zip } = req.body;

    // Verifica si address está definido antes de acceder a zip
    if (!address || !address.zip) {
      throw new Error('La propiedad zip no está definida en address');
    }

    const nuevoCliente = new Cliente({
      legal_name,
      tax_id,
      tax_system,
      email,
      address: { zip },
    });

    // Guardar el cliente en la base de datos simulada
    // Aquí debes usar tu lógica para almacenar el cliente en el arreglo o en la base de datos simulada
    // Por ahora, simplemente agregaremos el cliente al arreglo
    // clientesSimulados.push(nuevoCliente);
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener todos los clientes (simulados)
router.get('/clientes', (req, res) => {
  // Aquí debes obtener los clientes desde tu base de datos simulada
  // Por ahora, simplemente devolveremos un mensaje
  res.status(200).json({ message: 'Obteniendo todos los clientes' });
});

module.exports = router;
