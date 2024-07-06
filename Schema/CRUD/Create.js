const Funcionario = require("../FuncionarioSchema")
const Perfil = require("../PerfilSchema")  


async function CriarFuncionarioComPerfil(objeto){
    try {
        // Criar um novo funcionário
        const CriarFuncionario = await Funcionario.create({
          nome: objeto.nome,
          cargo: objeto.cargo,
          salario: objeto.salario,
        });

     
        // Criar um perfil associado ao funcionário
        const CriarPerfil = await Perfil.create({
          funcionario_id: CriarFuncionario._id,
          idade: objeto.idade,
          endereco: objeto.endereco,
          telefone: objeto.telefone,
        });
    
        console.log('Funcionário e perfil criados com sucesso:', CriarFuncionario, CriarPerfil);
      } catch (error) {
        console.error('Erro ao criar funcionário e perfil:', error);
      }
    }

    module.exports = CriarFuncionarioComPerfil
