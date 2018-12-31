module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    productid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    unit: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Products'),
};
