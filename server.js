const http = require('http');

const nStatic = require('node-static');

const fileServer = new nStatic.Server('./modules');

http.createServer(function (req, res) {

    fileServer.serve(req, res);
    console.log('Server started');
}).listen(5000);