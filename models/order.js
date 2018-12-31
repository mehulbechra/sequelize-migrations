module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
  }, {});
  Order.associate = (models) => {
    Order.belongsTo(models.Customer);
    Order.belongsToMany(models.Product, { through: 'OrderProducts' });
  };
  return Order;
};
