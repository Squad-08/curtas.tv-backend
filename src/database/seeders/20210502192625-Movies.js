'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      { // If you want to add a movie, remember to make the relationship with their respective genres in GenreMovie seed.
        id: "18ff2f12-574a-4cfd-b2cf-fc124cd59125",
        title: "Here Is The Plan",
        sinopse: "A dog/cat couple attempt to fulfill their dreams of opening a bakery together, but find their efforts hindered by the problems of the real world.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZWYwZDA5MTEtNzUyOS00ZTNmLWE3YWItZDIwZWQwYzAwNWRiXkEyXkFqcGdeQXVyNzE2Njc3MzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMGM5MWE5MWItYTc2MC00ZGI3LWExZWItMjViNjFmM2Q3NWY0XkEyXkFqcGdeQXVyNzE2Njc3MzM@._V1_FMjpg_UX1000_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5Zqmt1H35fs",
        popularity: 0
      },
      {
        id: "263fc922-b665-4bbf-9f26-0250d65c24ef",
        title: "Lost & Found",
        sinopse: "A clumsy crochet dinosaur must unravel itself to save the love of its life.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI5NjRmYzMtYTUwNi00Y2JlLTllODktNGIxNTQ5ZGY5YmZjXkEyXkFqcGdeQXVyMTU0NTE4NDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMzAxMzVmNWYtNzc4Yi00YWUxLTlkYWUtYWEyYzQ1YWFjYmVjXkEyXkFqcGdeQXVyNTkxMDU1Njg@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=35i4zTky9pI",
        popularity: 0
      },
      {
        id: "6758c8f8-6d77-479e-a8f0-d99925059c8a",
        title: "Kitbull",
        sinopse: "An unlikely connection sparks between two creatures: a fiercely independent stray kitten and a pit bull. Together, they experience friendship for the first time.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BODA4YmFkMGYtY2MwNC00ZDc0LTgyMjUtZDAzMjdmYTRkNDkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNTQ1NTc3NjctNDA0ZC00NzcyLTljY2YtYjZmYzE3YTY4NTA0XkEyXkFqcGdeQXVyNjgwNDU3NTA@._V1_FMjpg_UX1000_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=AZS5cgybKcI",
        popularity: 0
      },
      {
        id: "77ad47be-fd10-42de-83ee-37221dcdd3c6",
        title: "The OceanMaker",
        sinopse: "After the seas have disappeared, a courageous young female pilot fights against vicious sky pirates for control of the last remaining source of water: the clouds.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTJiNDg1ODktMjE1Ni00Yzc3LWE5YTQtZjUzMmVlZWE0YWU3XkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BODU2YjEyOTktMzgyZC00NzRiLWFmZTMtZGIxM2Q0YzA3NTkwXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_FMjpg_UX1000_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=uWCGK4nneeU",
        popularity: 0
      },
      {
        id: "f8d186a6-fe75-46a4-b479-80a458d2f959",
        title: "Save Ralph",
        sinopse: "Introducing Ralph, the new spokes-bunny of the global campaign to ban animal testing for cosmetics. #SaveRalph​​ is a powerful stop-motion animation short film produced by Humane Society International, featuring an all-star multinational cast including Taika Waititi, Ricky Gervais, Zac Efron, Olivia Munn, Pom Klementieff, Rodrigo Santoro, Tricia Helfer and more.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMWVhYWI5MDAtNmUzYy00YTFmLWE4NjEtYTY1NjE1OGUyNDYzXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        thumbnailUrl: "https://themarketingbirds.com/wp-content/uploads/2021/04/173783153_489357725593026_8806799175083792546_n.jpg",
        videoUrl: "https://www.youtube.com/watch?v=G393z8s8nFY",
        popularity: 0
      },
      {
        id: "5566884d-fd34-4c7e-add5-c99176e1a548",
        title: "La Luna",
        sinopse: "A fable of a young boy coming of age in the most peculiar of circumstances. It's the first time his Papa and Grandpa are taking him to work. Will he be able to find his own way?",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZThmZjNjOTctNjhjNy00OGE5LTlhODEtNTRkMWE3NzJjMjdmXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNmQ1MTczYWItMTM5OS00NGUwLWIwMDUtYmRlZGU3MzIzMjM0XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=CCQ9v6XMC6c",
        popularity: 0
      },
      {
        id: "3fa91ed8-a485-42dc-afa3-dbc7d160049d",
        title: "In a Heartbeat",
        sinopse: "A boy has a crush on another boy and he is too shy to confess, but his heart is not so reticent.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmMwOGQ4YjAtOWYzYS00N2U4LThhMTYtYTdhYzk5ZmViMjgwXkEyXkFqcGdeQXVyOTcwNTAwMw@@._V1_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZGQyNTc0NGItN2M1Mi00ZGVjLWI2ZGMtMjBkNTBhYzY1ZTg2XkEyXkFqcGdeQXVyNTQ5MDYxODc@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=2REkk9SCRn0",
        popularity: 0
      },
      {
        id: "7d8834e0-e6d5-41b2-a222-c3895d7e2764",
        title: "Chateau de Sable",
        sinopse: "In the middle of a desert, soldiers are protecting a marvelous pearl, but a huge creature is going to steal it.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzNiN2YyMTEtZTY5Yi00YjBkLTg5ZjQtYWU0NTI2NzIyMTYyXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZjdiYjAwMTAtODg4ZS00NmM1LWJjYjMtODAxODhkZThjYmZkXkEyXkFqcGdeQXVyNTk3NTY4NjI@._V1_FMjpg_UX1000_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=vYRu6MwmFYE",
        popularity: 0
      },
      {
        id: "88d41098-a39e-434a-a30a-111777afc8f4",
        title: "The Pantheon",
        sinopse: "During the age of the Black Magic, stories were told that a space crystal is the key to unlock a portal between two worlds. Whoever acquires the key can unlock the portal at a lost temple called The Pantheon. The story begins with the battle between the Archer and the Orc.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTA0NWFjOGQtY2Q4Mi00MGIwLTgyNjMtNGMxNDUzYTdlOTQwXkEyXkFqcGdeQXVyMTE2NzIzNzU0._V1_UY268_CR5,0,182,268_AL_.jpg",
        thumbnailUrl: "https://www.stashmedia.tv/wp-content/uploads/Screen-Shot-2020-04-07-at-7.27.21-AM-1536x653.png",
        videoUrl: "https://www.youtube.com/watch?v=ZPc2UIgryJU",
        popularity: 0
      },
      {
        id: "9b570511-4bd0-4e1a-a558-ffedf29a6b3b",
        title: "One Day",
        sinopse: "One man always on the move will have an encounter that puts into question everything he knows",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzI3MmVkZDMtNjc0NC00NTcxLTk1M2ItZDM1ODUzM2E0NzJkXkEyXkFqcGdeQXVyMjA0NzcwMjI@._V1_UY268_CR147,0,182,268_AL_.jpg",
        thumbnailUrl: "http://filmnosis.com/wp-content/uploads/2013/10/oneday_703_vid.jpg",
        videoUrl: "https://www.youtube.com/watch?v=vFART6ZMeEA",
        popularity: 0
      },
      {
        id: "ac1b5583-2e6e-40ab-8a28-6a8348a4d0dc",
        title: "Crabe Phare",
        sinopse: "The legend. The myth. The monster. The tale that have been told for generations and generations of sealers as you have never seen before.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOWRiMzk5NWEtZTBjYS00ZjhhLTg1ZWYtZTNiY2MxMmUxN2NkXkEyXkFqcGdeQXVyODA1MjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://wiz-art.ua/festival/wp-content/uploads/2016/07/crabe-phare.png",
        videoUrl: "https://www.youtube.com/watch?v=Vo6HXsHgizc",
        popularity: 0
      },
      {
        id: "b94f34e0-de1a-4226-af0e-310d6a8bfb50",
        title: "Twin Islands",
        sinopse: "Twin Island East and Twin Island West are two twin islands governed by two kings, where the inhabitants follow the cult of symmetry. Therefore, everything goes two by two. But one day, one event changes everything.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjIxNmViZmYtZjFkZC00Y2Y3LWI4MDItNDZhOWNjYjViMThjXkEyXkFqcGdeQXVyNDQ3OTAzOTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
        thumbnailUrl: "https://www.stashmedia.tv/wp-content/uploads/2019-04-19_1213-640x360.png",
        videoUrl: "https://www.youtube.com/watch?v=fdr5fthfCOw",
        popularity: 0
      },
      {
        id: "5be53ffc-9564-4876-aa17-cc908227d16e",
        title: "The Black Hole",
        sinopse: "A sleep-deprived office worker photocopies a Black Hole late one night. Suddenly, the possibilities seem endless. Will greed get the better of him?",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNjllYzYzMzYtNmY2MS00MzVhLTliYTgtZWE5MGExZjg4MjUyXkEyXkFqcGdeQXVyMTI0Nzk5NTQ2._V1_.jpg",
        thumbnailUrl: "https://publicationslasopa835.weebly.com/uploads/1/2/5/8/125833268/996386556.png",
        videoUrl: "https://www.youtube.com/watch?v=ijEfmJLV5PE",
        popularity: 0
      },
      {
        id: "b85d92b6-57e2-4e99-96b5-f972ab62523d",
        title: "Battle at Big Rock",
        sinopse: "A family on a camping trip to Big Rock National Park, about 20 miles from where Fallen Kingdom has ended, take part in the first major confrontation between dinosaurs and humans.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYWVlYjExMDgtZGQ4Ni00MjVlLWI1YTQtNTAyYWI0M2Y4YTE3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZmJmZGRiOTQtMTU4My00NTZlLTliNGEtZTgwOWQ1Yzg0ZWZjXkEyXkFqcGdeQXVyNTE4Mzg5MDY@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=C7kbVvpOGdQ",
        popularity: 0
      },
      {
        id: "c593e965-ba71-4b42-a367-181f5fbc6070",
        title: "Smash & Grab",
        sinopse: "After years of toiling away inside the engine room of a towering locomotive, two antiquated robots will risk everything for freedom and for each other.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BN2ZjNDgyMjMtMzJlNC00MmE4LWFkNGMtZDBiOWFiOTJjYTM2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZmFmOGUwODMtZTIwOS00NGE4LTljNTQtNDkwYTI4NTIyZDA3XkEyXkFqcGdeQXVyNjgwNDU3NTA@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=A4-G7YpSFb4",
        popularity: 0
      },
      {
        id: "d040bda5-9ed7-487a-961c-885671f56882",
        title: "Planet Unknown",
        sinopse: "No final do século 21, a humanidade estava enfrentando o esgotamento dos recursos globais. Space Rovers foram enviados para encontrar planetas habitáveis em potencial.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDc5ZDg1MzUtMzdhZC00NzE3LWJkYWUtMWQyZWFlYzJjOTQ4XkEyXkFqcGdeQXVyMzcxMzc2ODA@._V1_UY268_CR9,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BODQ3YmMwZDItOTQ3My00ZWExLThiYzEtMTczZTA2NWNhYzczXkEyXkFqcGdeQXVyMzcxMzc2ODA@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=B4JY_JeodKw",
        popularity: 0
      },
      {
        id: "fa493b4f-7894-4813-8229-3e77d28ff216",
        title: "FTL",
        sinopse: "A lone astronaut testing the first faster-than-light spacecraft travels farther than he imagined possible.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BODcwOTlhY2QtOTllYy00Mzc1LWIwNzAtMWE0YWNlNGQyN2EyXkEyXkFqcGdeQXVyMTA4MjU2MA@@._V1_UY268_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://images.squarespace-cdn.com/content/v1/586d42bbebbd1a367d557779/1488921426268-B4EKK9VXWD7F8VR1CN4J/ke17ZwdGBToddI8pDm48kMD85UhlX-xb_FAMyDfXUvZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI37IdidUet6c4HziTUPPhrCmSndEIJlU00xUzUxmbzJI/FTL+3.png",
        videoUrl: "https://www.youtube.com/watch?v=t8LD0iUYv80",
        popularity: 0
      },
      {
        id: "fb68f757-f0c1-479d-a984-8780a7f3cfd0",
        title: "Wire Cutter",
        sinopse: "A chance encounter proves fateful for 2 robots mining on a desolate planet.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDlkMGM1YzUtMDE5MS00MDU0LWE2MmQtM2JhOWI1ZjJmYmNkXkEyXkFqcGdeQXVyMTE1NzEzNDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNzlkZjMyODMtMWYxYy00MmY5LWFkOGQtYWJmZmZkZDljN2Y1XkEyXkFqcGdeQXVyMjI3MTE4MjU@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Z-d-qHH9IPo",
        popularity: 0
      },
      {
        id: "95fcacaf-3e50-41ea-9028-c5e3ecc2b107",
        title: "Connected",
        sinopse: "In a near future where world humanity has been deprived of closeness, a small boy, Timmy, full of curiosity discovers a family expressing human emotions in an underground theater.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYjhjNzVkYjItNjQ3OS00NjkyLWFmMjctMGMwY2JmZTI2MGNmXkEyXkFqcGdeQXVyNTE4Mzk5MjA@._V1_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNTUyYTVmMmUtYjI4OS00YjZjLWFiMjktMmZjZGJhNDBmNGFhXkEyXkFqcGdeQXVyNTE4Mzk5MjA@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=7ceDWzQBYmk",
        popularity: 0
      },
      {
        id: "83fd213a-fe1c-4995-85e2-898b74b04db7",
        title: "Orbit Ever After",
        sinopse: "A young man, who's lived his whole life orbiting Earth with his mom, dad and grandpa, falls in love with a girl on another spaceship. A message tells him to jump to her next time they pass.",
        posterUrl: "https://images.justwatch.com/poster/12044176/s592",
        thumbnailUrl: "https://kanopy.com/cdn-cgi/image/fit=cover,height=900,width=1600/https://static-assets.kanopy.com/video-images/a5439765-443b-4425-92a7-4662b6398576.jpg",
        videoUrl: "https://www.youtube.com/watch?v=DpFXMIxlgPo",
        popularity: 0
      },
      {
        id: "f9e2a146-a43b-463d-93ae-136ab7622f76",
        title: "A Crimson Man",
        sinopse: "In a war-torn land of man vs. robot, a young runaway slave searching for his father must ally with a broken and battle-scarred war-robot or be hunted down by his brutal overseers.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDdmMjllNmQtZDg1Zi00Yjc2LWI0YTEtOWNlOTM3ZTY1ODQxXkEyXkFqcGdeQXVyMjIwNzAxNQ@@._V1_.jpg",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMGMwODliYmMtNDY4MS00NTBlLWJiOGItYWU1MzI3MTA4ZTM0XkEyXkFqcGdeQXVyMjIwNzAxNQ@@._V1_.jpg",
        videoUrl: "https://www.youtube.com/watch?v=j5yp3lHKjkQ",
        popularity: 0
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', {}, {})
  }
};
