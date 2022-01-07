const express = require('express');
const ProdutoController = require('./controllers/ProdutoController');


const routes = express.Router()

routes.post('/cadastro_produtos', ProdutoController.criar
)
routes.get('/', ProdutoController.listar
)
routes.get('/lista_produtos/:id', ProdutoController.listar_id
)
routes.put('/update/', ProdutoController.update
)
routes.delete('/delete/', ProdutoController.delete
)



module.exports = routes