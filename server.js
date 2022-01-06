var http = require('http');
const express = require('express');
const routes = require('./routes');
const { response } = require('express');
const { listen } = require('express/lib/application');
http.createServer(function(req, res) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.end("Entro\n")
}); listen(process.env.PORT)

require('./database')

const app = express();

app.use(express.json())
app.use(routes)

