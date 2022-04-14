const express = require("express");
const rotas = express.Router();


let cursosInfo = [
    {"curso":"node","info":"Curso de node.js"},
    {"curso":"java","info":"Curso de java"},
    {"curso":"phyton","info":"Curso de phyton"},
    {"curso":"capybara","info":"Curso de capybara"}
]


rotas.get("/",(req,res) => {
   res.json({ola:"seja bem vindo"}) 
})

rotas.get("/:cursoid",(req,res) => {
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso);
   
    if(!cursoI){
        res.status(404).json(
            {erro:"curso nao encontrado", cursoPesquisado:curso}
        )
    }else{
        res.status(200).json(cursoI)
    }


 })

 module.exports = rotas