//Criar uma constate que chama a biblioteca
const express = require("express");

const app = express();

//Chamar a porta do servidor
app.listen(8080, () => console.log("server ativo na porta 8080"));

app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Criando a primeira rota
app.get("/", (req, res) => {
  res.send("<h1>Bem vindo </h1>");
});

app.post("/postHTML", (req, res) => {
  const { nome } = req.body;

  console.log(`Ola ${nome}`);
});
