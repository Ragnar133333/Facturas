// controllers/clienteController.js
const db = require('../db'); // Asegúrate de que la ruta sea correcta

// Ruta para crear un nuevo cliente (simulado)
exports.crearCliente = (req, res) => {
  const { legal_name, tax_id, tax_system, email, address, zip } = req.body;
  const nuevoCliente = {
    legal_name,
    tax_id,
    tax_system,
    email,
    address: { zip },
  };
  db.agregarCliente(nuevoCliente);
  res.status(201).json({ message: 'Cliente creado exitosamente' });
};
