const express = require('express');
const ProdutoController = require('./controllers/ProdutoController');


const routes = express.Router()


app.get('/', function (req, res) {
  res.render('Ola')
}
)



module.exports = routes