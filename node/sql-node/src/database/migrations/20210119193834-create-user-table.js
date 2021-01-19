'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'users',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.BIGINT,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          noEmpty: true,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          noEmpty: true,
          isEmail: true,
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users')
  }
};
