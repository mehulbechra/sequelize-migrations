module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    unit: DataTypes.INTEGER,
  }, {});
  Product.associate = (models) => {
    Product.belongsToMany(models.Order, { through: 'OrderProducts' });
  };
  return Product;
};
