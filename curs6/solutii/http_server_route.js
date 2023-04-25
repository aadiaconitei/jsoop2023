// Cand dorim sa importam un modul in aplicatia noastra 
// folosim  require ('nume_modul');

const http = require('http');  // includem modulul http
const data = require("./crud/server/data/users.json");
const port = 3001;  // setam un port pentru server ( Recomandate: diferit de 80, 443, 8080)
const host = 'localhost';

const routes = {
    '/': function index (request, response) {
    response.writeHead(200);
    response.end('Hello, World!');
    },
    '/about': function about (request, response) {
    response.writeHead(200);
    response.end('You are now viewing "about"');
    },
    '/blog': function about (request, response) {
        response.writeHead(200);
        response.end('You are now viewing "Blog"');
    },
    '/api': function api (request, response) {
        response.writeHead(200);
        response.end(JSON.stringify(data));
    }
   }


// Start server 
// req - cererile catre seerver: requests
// res - raspunsurile serverului: responses
let server = http.createServer( function (req, res) {
    res.writeHead(
        200,
        {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*', 
        }
    ); 
    if (req.url in routes) {
        return routes[req.url](req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404])

});
server.listen(port, host, () => { 
    console.log(`Server is running on http://${host}:${port}`); 
   }); 

// 1. pornim serverul
// node http_server.js 
// 2. accesam in browser
// http://localhost:3001

// putem opri serverul : ctrl+c