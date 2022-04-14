const express = require("express");
const { url } = require("inspector");
const app = express()

/*atenção lauricio .. 
_primeiro parametro passado é uma direção para ond eaponta a rota

_segundo parametro passado é uma arrow function que receba a requisição e a resposta 

_e dentro da arrow function temos alguns metodod para adicionar a rota



*/

app.get("/cursos", (req,res) => {
  res.json({cursos:"phyton"})
});

app.get("/", (req,res) => {
  res.send("lauricio teste de rota express")
});
// observação a rerquisição é o que será passado pelo usuario na url

app.listen(3000, () =>{
    console.log("servidor rodando!")
})

// atenção o methodo listen rescebe por padroa uma porta, um host e uma função de backlog 