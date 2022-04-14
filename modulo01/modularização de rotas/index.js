const express = require("express");
const rotas = require("./rotas/rotas");
const port = process.env.PORT || 3000;

const app = express();

app.use("/",rotas);

app.get("*",(req,res) => {
    res.send("lauricio cursos")
})

app.listen(port, () => {
    console.log("servidor rodando!!!")
})