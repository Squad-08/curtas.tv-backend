'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genre_movie', [
      {
        id_genre: 'f6fe9ed0-c2b6-4fa6-b64f-0e12bce564d0',
        id_movie: '18ff2f12-574a-4cfd-b2cf-fc124cd59125',
      },
      {
        id_genre: 'f6fe9ed0-c2b6-4fa6-b64f-0e12bce564d0',
        id_movie: '263fc922-b665-4bbf-9f26-0250d65c24ef',
      },
      {
        id_genre: 'f6fe9ed0-c2b6-4fa6-b64f-0e12bce564d0',
        id_movie: '6758c8f8-6d77-479e-a8f0-d99925059c8a',
      },
      {
        id_genre: 'f6fe9ed0-c2b6-4fa6-b64f-0e12bce564d0',
        id_movie: '77ad47be-fd10-42de-83ee-37221dcdd3c6',
      },
      {
        id_genre: 'd101a4ed-709b-4266-91b0-b3142e264315',
        id_movie: '7d8834e0-e6d5-41b2-a222-c3895d7e2764',
      },
      {
        id_genre: 'd101a4ed-709b-4266-91b0-b3142e264315',
        id_movie: '88d41098-a39e-434a-a30a-111777afc8f4',
      },
      {
        id_genre: 'd101a4ed-709b-4266-91b0-b3142e264315',
        id_movie: '9b570511-4bd0-4e1a-a558-ffedf29a6b3b',
      },
      {
        id_genre: 'd101a4ed-709b-4266-91b0-b3142e264315',
        id_movie: 'ac1b5583-2e6e-40ab-8a28-6a8348a4d0dc',
      },
      {
        id_genre: 'd101a4ed-709b-4266-91b0-b3142e264315',
        id_movie: 'b94f34e0-de1a-4226-af0e-310d6a8bfb50',
      },
      {
        id_genre: 'd03fa7b0-986b-4d28-8c70-7a418cfa173d',
        id_movie: 'c593e965-ba71-4b42-a367-181f5fbc6070',
      },
      {
        id_genre: 'd03fa7b0-986b-4d28-8c70-7a418cfa173d',
        id_movie: 'd040bda5-9ed7-487a-961c-885671f56882',
      },
      {
        id_genre: 'd03fa7b0-986b-4d28-8c70-7a418cfa173d',
        id_movie: 'fa493b4f-7894-4813-8229-3e77d28ff216',
      },
      {
        id_genre: 'd03fa7b0-986b-4d28-8c70-7a418cfa173d',
        id_movie: 'fb68f757-f0c1-479d-a984-8780a7f3cfd0',
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('genre_movie', null, {})
  }
};
