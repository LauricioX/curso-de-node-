// criando rotas dentro do servidor

const http = require("http");
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
res.writeHead(200,{
    "Content-Type":"text/html"
});

if(req.url === "/"){
    res.write("<h1>seja bem vindo!</h1>");
}

else if(req.url === "/cursos"){
    res.write("<h1>veja os cursoa</h1>");
}

else if(req.url === "/sobre"){
    res.write("<h1>veja as informações sobre min!!</h1>");
} else if(req.url === "/cursos/node"){
    res.write("<h1 style='color:blue;'>seja bem vindo ao curso de node!</h1>")
}

res.end();

});

servidor.listen(porta,host,()=>{
    console.log("servidor rodando!!");
})
