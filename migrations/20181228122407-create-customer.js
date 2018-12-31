module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Customers', {
    customerid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fname: {
      type: Sequelize.STRING,
    },
    lname: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Customers'),
};
