module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Orders', // name of Source model
    'quantity', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'Orders', // name of Source model
    'quantity', // key we want to remove
  ),
};
