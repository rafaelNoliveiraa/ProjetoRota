//carre ga o modulo HTTP e URL
var http = require('http');
var url = require('url');

//Função de callback para o servidor HTTP
var callback = function (request, response) {
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
    //faz o parse url separado o caminho ( rota)
    var parts = url.parse(request.url);
    //Verifica a rota
    
    
    if (parts.path == "/rota1") {
        response.end("Rota 01")

    } else if (parts.path == "/rota2") {
        response.end("Rota02")
    } else if(parts.path == "/rota3"){
        response.end("Rota3")
    }else{
        response.end("Rota invalida " + parts.path);
    }
}
var server = http.createServer(callback);

// Porta que o servidor vai escutar
server.listen(3000)

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");