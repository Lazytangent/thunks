'use strict';
const data = require('../seeder-content/articles.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
