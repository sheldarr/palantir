const Server = require('./server');

process.env.NODE_ENV = process.env.PORT || 'development';
process.env.PORT = process.env.PORT || 8080;

const server = new Server();

server.start();