'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
const orderdetail = require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Gender);
      Product.belongsTo(models.Image, {
        foreignKey: 'product_id',
        as: "images"
      }),
      Product.hasOne(models.OrderDetail, {
        foreignKey: 'product_id',
    as:'orders'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    gender_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};