// db.js

// Crear un arreglo para almacenar los clientes simulados
const clientesSimulados = [];

// Función para agregar un nuevo cliente al arreglo
function agregarCliente(cliente) {
  clientesSimulados.push(cliente);
}

// Función para obtener todos los clientes
function obtenerClientes() {
  return clientesSimulados;
}

module.exports = {
  agregarCliente,
  obtenerClientes,
};
