'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('genre_movie', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        id_genre: '',
        id_movie: '',
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        id_genre: '',
        id_movie: '',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('genre_movie', null, {})
  }
};
