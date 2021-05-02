'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('genres',
      [
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Ação'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Aventura'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Cinema de arte'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Chanchada'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Comédia'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Comédia de ação'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Comédia de terror'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Comédia dramática'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Comédia romântica'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Dança'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Documentário'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Docuficção'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Drama'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Espionagem'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Faroeste'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Fantasia'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Fantasia científica'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Ficção científica'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Filmes com truques'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Filmes de guerra'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Musical'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Filme policial'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Seriado'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Suspense'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Terror'
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Thriller'
        }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('genres', null, {})
  }
};
