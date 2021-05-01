'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('genre_movie', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      id_genre: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id'
        }
      },
      id_movie: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('genre_movie')
  }
};
