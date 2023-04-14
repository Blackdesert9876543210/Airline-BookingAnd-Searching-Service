'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[

    {
      name : 'JayBangla International airport',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Mahatma gandhi International airport',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'delhi capital airport',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Hatikhamar  airport',
      cityId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
