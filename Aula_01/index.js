//Criar uma constate que chama a biblioteca
const express = require("express");

const app = express();

//Chamar a porta do servidor
app.listen(8080, () => console.log("server ativo"));

//Criando a primeira rota
app.get("/", () => {
  console.log("Aoba, bão?");
});

let nome = "Lucas";

//Rota de envio de marcação
app.get("/testeHTML", (req, res) => {
  res.send("<h1 style='color: blue'> Ola minha primeira pagina </h1>" + nome);
});
