module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'OrderProducts',
    {
      ProductId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      OrderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    },
  ),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('OrderProducts'),
};
