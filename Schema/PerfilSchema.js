const mongoose = require("mongoose")
const Schema = mongoose.Schema

const perfilSchema = new Schema({
    funcionario_id: {
      type: Schema.Types.ObjectId,
      ref: 'Funcionario',
      required: true,
    },
    idade: Number,
    endereco: String,
    telefone: String,
  });
  const Perfil = mongoose.model('Perfil', perfilSchema);

  module.exports= Perfil
        