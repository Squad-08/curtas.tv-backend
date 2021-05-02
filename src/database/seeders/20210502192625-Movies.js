'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('movies', [
      { // If you want to add a movie, remember to make the relationship with their respective genres in GenreMovie seed.
        id: Sequelize.literal('uuid_generate_v4()'),
        title: '',
        sinopse: '',
        posterUrl: '',
        videoUrl: '',
        popularity: 0
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('movies', null, {})
  }
};
