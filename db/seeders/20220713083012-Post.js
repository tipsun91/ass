'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        user_id: 1,
        text: 'Wohoo!',
        image_url: '1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        text: 'Wham!',
        image_url: '2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        text: 'Whoosh!',
        image_url: '3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        text: 'Whack!',
        image_url: '4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
