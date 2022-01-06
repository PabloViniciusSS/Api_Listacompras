const { Model, DataTypes } = require('sequelize')

class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      observacao: DataTypes.STRING,
      created_at: DataTypes.DATE,
       updated_at: DataTypes.DATE,
    }, {
      sequelize
    })
  }
}
module.exports = Produto