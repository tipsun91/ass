'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        user_id: 2,
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        post_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        post_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        post_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
