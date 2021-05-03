'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('genre_movie', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
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
    queryInterface.dropTable('genre_movie')
  }
};
