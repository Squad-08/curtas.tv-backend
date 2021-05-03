'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres',
      [
        {
          id: "b7eff34d-61db-414c-b358-7a84a236e5bf",
          name: 'Ação'
        },
        {
          id: "fc941385-e247-48c0-8b9e-75a16bad16db",
          name: 'Aventura'
        },
        {
          id: "2f6d25e6-63c5-44ff-a5b7-c698658eab93",
          name: 'Cinema de arte'
        },
        {
          id: "43d08d89-9ccb-40e1-9278-2e6af15af4c9",
          name: 'Chanchada'
        },
        {
          id: "4b93854f-4ac6-4ffb-a470-c208411d67d3",
          name: 'Comédia'
        },
        {
          id: "2f755745-05bb-4074-bba3-f7b0f0d0a191",
          name: 'Comédia de ação'
        },
        {
          id: "8c6c0336-6af3-4288-aa34-7efd95587c44",
          name: 'Comédia de terror'
        },
        {
          id: "678597ea-73ea-4090-8279-28471f046ce5",
          name: 'Comédia dramática'
        },
        {
          id: "55a039fc-4f6b-49e9-ae22-194fdfaf03ce",
          name: 'Comédia romântica'
        },
        {
          id: "3d260231-26e8-46bc-b896-3545f7deb611",
          name: 'Dança'
        },
        {
          id: "c863ef7a-0fba-4e80-91e8-b164b9227d53",
          name: 'Documentário'
        },
        {
          id: "4382038c-0af8-41ed-9fa0-8765c39a68c1",
          name: 'Docuficção'
        },
        {
          id: "f6fe9ed0-c2b6-4fa6-b64f-0e12bce564d0",
          name: 'Drama'
        },
        {
          id: "d03a8a60-c36c-4807-bf2e-dc6f1e4f5ec9",
          name: 'Espionagem'
        },
        {
          id: "bcbea643-40a1-4715-9b13-c5e2f43c82b2",
          name: 'Faroeste'
        },
        {
          id: "d101a4ed-709b-4266-91b0-b3142e264315",
          name: 'Fantasia'
        },
        {
          id: "9909e751-ca46-4c5d-8c36-7e516e11e1f0",
          name: 'Fantasia científica'
        },
        {
          id: "d03fa7b0-986b-4d28-8c70-7a418cfa173d",
          name: 'Ficção científica'
        },
        {
          id: "7d1be263-8ba7-4ce9-8c72-b2058050a57d",
          name: 'Filmes com truques'
        },
        {
          id: "1d333b97-2611-415a-a759-28e085c68460",
          name: 'Filmes de guerra'
        },
        {
          id: "ecbabdf8-94c0-48a8-abbf-4ba739c441a8",
          name: 'Musical'
        },
        {
          id: "c2e514a4-de8e-402c-b0eb-3b8b312f949e",
          name: 'Filme policial'
        },
        {
          id: "8d5f8cde-69b7-4082-9a5b-59a7f3b2e545",
          name: 'Seriado'
        },
        {
          id: "86d1c387-e3b3-4f25-929a-b8f27ce5ad5d",
          name: 'Suspense'
        },
        {
          id: "78edc2fd-e26e-406a-a91a-d4e10d8f97ee",
          name: 'Terror'
        },
        {
          id: "3edec10c-582d-42d5-bad5-55fe1e2d8dee",
          name: 'Thriller'
        }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('genres', {}, {})
  }
};
