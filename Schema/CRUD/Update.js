const Funcionario = require("../FuncionarioSchema")
const Perfil = require("../PerfilSchema")  

async function UpdateFuncionarioComPerfil(objeto){
    await Funcionario.updateOne({_id:objeto.id},{
        nome:objeto.nome,
        cargo:objeto.cargo,
        salario: objeto.salario,
    }).then(resultado => {
        console.log(resultado);
            })
    .catch(erro => console.error('Erro ao atualizar:', erro))

    await Perfil.updateOne({funcionario_id:objeto.id},{
        idade:objeto.idade,
        endereco:objeto.endereco,
        telefone: objeto.telefone,
    }).then(resultado => {
        console.log(resultado);
            })
    .catch(erro => console.error('Erro ao atualizar:', erro))

}
module.exports = UpdateFuncionarioComPerfil 