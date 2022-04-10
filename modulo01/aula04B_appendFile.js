const http = require("http");
const fs = require("fs");
const port = process.env.PORT ;

const server = http.createServer((req,res) => {
    
 fs.appendFile("index.txt","teste de arquivo sendo criado com appendfile", (err) => {
    if(err)throw err
    console.log("servidor criado!");
    res.end()
 })
})

server.listen(port || 3000, () => {
    console.log("servidor rodando!")
})