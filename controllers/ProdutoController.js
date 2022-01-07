const Produto = require("../models/Produto")


module.exports = {
  async criar(req, res) {
    const{ nome, quantidade, observacao, created_at, updated_at} = req.body

    const produto = await Produto.create({ nome, quantidade, observacao, created_at, updated_at })

    return res.json(produto)
  },
  async listar(req, res) {

    const{ nome, quantidade, observacao, created_at, updated_at} = req.body

    const produto = await Produto.findAll({ nome, quantidade, observacao, created_at, updated_at });

    return res.json(produto)
  },
  async listar_id(req, res) {
  
    const produto = await Produto.findByPk(req.params.id);

    return res.json(produto)
  },
  async update(req, res) {
    const{ id, nome, quantidade, observacao, created_at, updated_at} = req.body

    const produto = await Produto.update(
      { nome, quantidade, observacao, created_at, updated_at},
      {
        where: {
          id
        },
        
      }
      
    );

    return res.send("produto" + {id} + "modificado")
  },
  async delete(req, res) {
    const{ id } = req.body

    const produto = await Produto.destroy({
      where: {
        id
      },
    });

    return res.send("produto apagado")
  }
}