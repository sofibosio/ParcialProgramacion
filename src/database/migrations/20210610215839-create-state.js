'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
     // createdAt: {
       // allowNull: false,
        //type: Sequelize.DATE
      //},
      //updatedAt: {
       // allowNull: false,
        //type: Sequelize.DATE
      //}
      description:{
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('States');
  }
};