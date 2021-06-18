'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //hasOne
      // belongsToOne
      Order.belongsTo(models.Payment, {
        foreignKey: 'payment_id'
      });
      // belongsTo
      Order.belongsTo(models.User);
      // belongsToOne
      Order.belongsTo(models.State, {
        foreignKey: 'states_id'
      });
      // hasOne
      Order.hasOne(models.Shipping, {
        foreignKey: 'order_id',
        as: 'shippings'
      })
      // hasMany
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'order_id',
        as: "orderDetails"
      })
    }



  }
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    shipping_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};