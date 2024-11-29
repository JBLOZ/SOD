
const http = require('http');
const PORT = 8080;
const server = http.createServer();
function HTTP_Response(request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Hola a todas y a todos!\n');
response.end();
}
server.on('request', HTTP_Response);
server.listen(PORT);
console.log(`Servidor ejecutándose en http://localhost:${PORT}`);