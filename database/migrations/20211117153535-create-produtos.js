'use strict';

  module.exports = {
    up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('produtos', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: true,
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       quantidade: {
         type: Sequelize.INTEGER,
         allowNull: true,
       },
       observacao: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       created_at: {
          type: Sequelize.DATE,
          allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
     },
  
     })
    },
  
    down: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('produto')
    }
  };
  
