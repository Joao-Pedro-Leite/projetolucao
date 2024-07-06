const mongoose = require("mongoose")

const Schema = mongoose.Schema

  const funcionarioSchema = new Schema({ 
    nome: String,
    cargo: String,
    salario: Number
  })
  const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

  module.exports = Funcionario