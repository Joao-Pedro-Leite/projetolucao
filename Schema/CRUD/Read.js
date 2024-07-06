const Funcionario = require("../FuncionarioSchema") 
const Perfil = require("../PerfilSchema") 

async function AcharDados(){
    const funcionarios = await Funcionario.find() 
    const perfis = await Perfil.find()

    var dadosFormatado = []

funcionarios.forEach((element,x) => {
    var objetoFormatado = {
        id: funcionarios[x]._id,
        nome: funcionarios[x].nome,
        cargo:funcionarios[x].cargo,
        salario:funcionarios[x].salario,
        
     
        idade: perfis[x].idade,
        endereco: perfis[x].endereco,
        telefone: perfis[x].telefone
        

    }

    dadosFormatado.push(objetoFormatado)
});

return dadosFormatado

     }

module.exports = AcharDados

