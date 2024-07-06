const express = require("express")
const cors = require("cors");
const app = express()
const port = 3001
const mongoose = require("mongoose")
const uri = "mongodb+srv://joaolindo1234:joaolindo1234@projeto.5hhfhap.mongodb.net/?retryWrites=true&w=majority&appName=Projeto"
const Funcionario = require("./Schema/FuncionarioSchema")  
const Perfil = require("./Schema/PerfilSchema")
const AcharDados = require("./Schema/CRUD/Read")
const CriarFuncionarioComPerfil = require("./Schema/CRUD/Create")
const DeletarFuncionarioComPerfil = require("./Schema/CRUD/Delete")
const UpdateFuncionarioComPerfil = require("./Schema/CRUD/Update")
const objeto = {
    nome: "Lucas",
    cargo: "Senior",
    salario: 9.600,
    idade: 16,
    endereco:"Rua Pororoca",  
    telefone: 12988352521,
}
const objeto2 = {
    nome: "Joao",
    cargo: "estagiario",
    salario: 100,
    idade: 85,
    endereco:"Rua roroca",  
    telefone: 12988352528,
}
app.use(cors())


mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

  app.use(express.json())
  
  app.get("/",async(req,res)=>{
  const x = await AcharDados()

  
    
    res.send(x)  
})

app.post("/criar", async(req,res)=>{
  
  try {
    const { nome, cargo, salario} = req.body;

        if (!nome ||  !cargo ||  !salario ) {
            
            return res.status(400).send("Todos os campos são obrigatórios.");
        }

  var cadastro = await req.body
  console.log(cadastro)
   
   await CriarFuncionarioComPerfil(cadastro)

   res.send("Casdastrado com Sucesso :D")
  } catch (error) {
    res.send("Cadastro falhou")
  }
  
})  

app.post("/update", async(req,res)=>{
  try {
    const { id} = await req.body;

        if (!id) {
            
            return res.status(400).send("Id Obrigatorio plis");
        }

    var update = await req.body
    await UpdateFuncionarioComPerfil(update)
    res.send("Atualizado com Sucesso!")
    
  } catch (error) {
    res.send("Falhou")
    
  }
})

app.post("/apagar", async(req,res)=>{
  try {
    const  {id} = await req.body;
    if (!id) {
            
      return res.status(400).send("Id Obrigatorio");
  }
    await DeletarFuncionarioComPerfil(id)

    res.send("Apagado com Sucesso!")
console.log(id)
  } catch (error) {
    res.send("Falhou")
  }

})

app.listen(port)



