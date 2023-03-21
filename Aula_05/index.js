//Criar uma constate que chama a biblioteca
const express = require("express");

const app = express();

//Chamar a porta do servidor
app.listen(8080, () => console.log("server ativo na porta 8080"));

app.use(express.json());

const { pg, conect, createDatabase, test } = require("./data/db");

createDatabase();
