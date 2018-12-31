module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Orders', // name of Source model
    'CustomerId', // name of the key we're adding
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Customers', // name of Target model
        key: 'customerid', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'Orders', // name of Source model
    'CustomerId', // key we want to remove
  ),
};
