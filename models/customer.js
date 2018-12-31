module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
  };
  return Customer;
};
