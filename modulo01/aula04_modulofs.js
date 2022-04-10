const http = require("http");
const fs = require("fs");
const port = process.env.PORT ;

const server = http.createServer((req,res) => {
    // as funçõe do modulo fs recebem tres parametros como esão abaixo
    // o primeiro é o endereço do arquivo a ser lido 
    // os segundos sao um para erro que é o primeiro e o outro é o arquivo anexado
 fs.readFile("index.html", (erro,arquivo) => {
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(arquivo);
    return res.end()
 })
})

server.listen(port || 3000, () => {
    console.log("servidor rodando!")
})