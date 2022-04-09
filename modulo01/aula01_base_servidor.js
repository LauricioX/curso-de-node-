const http = require("http");

http.createServer((requisicao,resposta) => {
    resposta.writeHead(200,{
        "Content-Type":"text/plain"
    });

    resposta.write("lauricio teste primeiro servidor");
    resposta.end()
    
}).listen(1337);