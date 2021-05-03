'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      sinopse: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      posterUrl: {
        type: Sequelize.STRING(200),
        allowNUll: false
      },
      videoUrl: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      popularity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('movies')
  }
};
