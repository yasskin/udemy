const http = require('http');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
