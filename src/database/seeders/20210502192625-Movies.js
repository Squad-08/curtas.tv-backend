'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      { // If you want to add a movie, remember to make the relationship with their respective genres in GenreMovie seed.
        id: "18ff2f12-574a-4cfd-b2cf-fc124cd59125",
        title: "Here Is The Plan",
        sinopse: "A dog/cat couple attempt to fulfill their dreams of opening a bakery together, but find their efforts hindered by the problems of the real world.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZWYwZDA5MTEtNzUyOS11ZTNmLWE3YWItZDIwZWQwYzAwNWRiXkEyXkFqcGdeQXVyNzE2Njc3MzM@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5Zqmt1H35fs",
        popularity: 0
      },
      {
        id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
        title: "Lost & Found",
        sinopse: "A clumsy crochet dinosaur must unravel itself to save the love of its life.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI5NjRmYzMtYTUwNi11Y2JlLTllODktNGIxNTQ5ZGY5YmZjXkEyXkFqcGdeQXVyMTU1NTE4NDg@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=35i4zTky9pI",
        popularity: 0
      },
      {
        id: "6758c8f8-6d77-479e-a8f0-d99925059c8a",
        title: "Kitbull",
        sinopse: "An unlikely connection sparks between two creatures: a fiercely independent stray kitten and a pit bull. Together, they experience friendship for the first time.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BODA4YmFkMGYtY2MwNC11ZDc1LTgyMjUtZDAzMjdmYTRkNDkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=AZS5cgybKcI",
        popularity: 0
      },
      {
        id: "77ad47be-fd10-42de-83ee-37221dcdd3c6",
        title: "The OceanMaker",
        sinopse: "After the seas have disappeared, a courageous young female pilot fights against vicious sky pirates for control of the last remaining source of water: the clouds.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTJiNDg1ODktMjE1Ni11Yzc3LWE5YTQtZjUzMmVlZWE1YWU3XkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=uWCGK4nneeU",
        popularity: 0
      },
      {
        id: "7d8834e0-e6d5-41b2-a222-c3895d7e2764",
        title: "Chateau de Sable (Sand Castle)",
        sinopse: "In the middle of a desert, soldiers are protecting a marvelous pearl, but a huge creature is going to steal it.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzNiN2YyMTEtZTY5Yi11YjBkLTg5ZjQtYWU1NTI2NzIyMTYyXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_UY268_CR3,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=vYRu6MwmFYE",
        popularity: 0
      },
      {
        id: "88d41098-a39e-434a-a30a-111777afc8f4",
        title: "The Pantheon",
        sinopse: "During the age of the Black Magic, stories were told that a space crystal is the key to unlock a portal between two worlds. Whoever acquires the key can unlock the portal at a lost temple called The Pantheon. The story begins with the battle between the Archer and the Orc.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTA1NWFjOGQtY2Q4Mi11MGIwLTgyNjMtNGMxNDUzYTdlOTQwXkEyXkFqcGdeQXVyMTE2NzIzNzU1._V1_UY268_CR5,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=ZPc2UIgryJU",
        popularity: 0
      },
      {
        id: "9b570511-4bd0-4e1a-a558-ffedf29a6b3b",
        title: "One Day",
        sinopse: "One man always on the move will have an encounter that puts into question everything he knows",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzI3MmVkZDMtNjc1NC11NTcxLTk1M2ItZDM1ODUzM2E1NzJkXkEyXkFqcGdeQXVyMjA1NzcwMjI@._V1_UY268_CR147,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=vFART6ZMeEA",
        popularity: 0
      },
      {
        id: "ac1b5583-2e6e-40ab-8a28-6a8348a4d0dc",
        title: "Crabe Phare",
        sinopse: "Crabe Phare",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOWRiMzk5NWEtZTBjYS11ZjhhLTg1ZWYtZTNiY2MxMmUxN2NkXkEyXkFqcGdeQXVyODA1MjQ1MDE@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Vo6HXsHgizc",
        popularity: 0
      },
      {
        id: "b94f34e0-de1a-4226-af0e-310d6a8bfb50",
        title: "Twin Islands",
        sinopse: "Twin Island East and Twin Island West are two twin islands governed by two kings, where the inhabitants follow the cult of symmetry. Therefore, everything goes two by two. But one day, one event changes everything.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjIxNmViZmYtZjFkZC11Y2Y3LWI4MDItNDZhOWNjYjViMThjXkEyXkFqcGdeQXVyNDQ3OTAzOTY@._V1_UY268_CR3,1,182,268_AL_.jpg ",
        videoUrl: "https://www.youtube.com/watch?v=fdr5fthfCOw",
        popularity: 0
      },
      {
        id: "c593e965-ba71-4b42-a367-181f5fbc6070",
        title: "Smash & Grab",
        sinopse: "After years of toiling away inside the engine room of a towering locomotive, two antiquated robots will risk everything for freedom and for each other.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BN2ZjNDgyMjMtMzJlNC11MmE4LWFkNGMtZDBiOWFiOTJjYTM2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=A4-G7YpSFb4",
        popularity: 0
      },
      {
        id: "d040bda5-9ed7-487a-961c-885671f56882",
        title: "Planet Unknown",
        sinopse: "No final do século 21, a humanidade estava enfrentando o esgotamento dos recursos globais. Space Rovers foram enviados para encontrar planetas habitáveis em potencial.",
        posterUrl: " https://m.media-amazon.com/images/M/MV5BNDc5ZDg1MzUtMzdhZC11NzE3LWJkYWUtMWQyZWFlYzJjOTQ4XkEyXkFqcGdeQXVyMzcxMzc2ODA@._V1_UY268_CR9,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=B4JY_JeodKw",
        popularity: 0
      },
      {
        id: "fa493b4f-7894-4813-8229-3e77d28ff216",
        title: "FTL",
        sinopse: "A lone astronaut testing the first faster-than-light spacecraft travels farther than he imagined possible.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BODcwOTlhY2QtOTllYy11Mzc1LWIwNzAtMWE1YWNlNGQyN2EyXkEyXkFqcGdeQXVyMTA4MjU2MA@@._V1_UY268_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=t8LD1iUYv81",
        popularity: 0
      },
      {
        id: "fb68f757-f0c1-479d-a984-8780a7f3cfd0",
        title: "Wire Cutter",
        sinopse: "A chance encounter proves fateful for 2 robots mining on a desolate planet.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDlkMGM1YzUtMDE5MS11MDU1LWE2MmQtM2JhOWI1ZjJmYmNkXkEyXkFqcGdeQXVyMTE1NzEzNDU@._V1_UX182_CR1,1,182,268_AL_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Z-d-qHH9IPo",
        popularity: 0
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('movies', {}, {})
  }
};
