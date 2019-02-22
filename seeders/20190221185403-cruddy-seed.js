'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("games", [{
     name: "Chess",
     description: "Awesome Strategic Board Game",
     players: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     name: "PUBG",
     description: "Awesome Battle Royal Game",
     players: 30,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
    name: "Shoots & Ladders",
    description: "A Boring Game.",
    players: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }], {}); 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("games", null, {}); 
  }
};
