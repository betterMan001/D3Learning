const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8000)

console.log('服务器运行于 http://127.0.0.1:8000/')