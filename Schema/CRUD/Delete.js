const Funcionario = require("../FuncionarioSchema")
const Perfil = require("../PerfilSchema")  

async function DeletarFuncionarioComPerfil(id){

    await Funcionario.deleteOne({_id:id}).then(deletedDocument => {
        if (deletedDocument) {
            console.log('Documento deletado:', deletedDocument);
        } else {
            console.log('Documento não encontrado.');
        }
    })
    .catch(err => console.error('Erro ao deletar documento:', err));
    
    await Perfil.deleteOne({funcionario_id:id}).then(deletedDocument => {
        if (deletedDocument) {
            console.log('Documento deletado:', deletedDocument);
        } else {
            console.log('Documento não encontrado.');
        }
    })
    .catch(err => console.error('Erro ao deletar documento:', err));
}
  

module.exports = DeletarFuncionarioComPerfil
