module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    orderid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Orders'),
};
