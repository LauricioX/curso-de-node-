// criando rotas dentro do servidor

const http = require("http");
const url = require("url")
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
res.writeHead(200,{
    "Content-Type":"text/html"
});

res.write(req.url);

const p = url.parse(req.url,true).query;
res.write('<br/>' + p.nome)
res.write('<br/>' + p.curso);

res.end();

});

servidor.listen(porta,host,()=>{
    console.log("servidor rodando!!");
})
