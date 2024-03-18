//cliente.js
class Cliente {
    constructor(legal_name, tax_id, tax_system, email, address,zip) {
      this.legal_name = legal_name;
      this.tax_id = tax_id;
      this.tax_system = tax_system;
      this.email = email;
      this.address = {
        zip: address.zip
      };
    }
  }
  
  module.exports = Cliente;