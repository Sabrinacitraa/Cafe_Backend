'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.order_list, {
        foreignKey: "order_id", as: "order_detail"
      })
      this.belongsTo(models.food, {
        foreignKey: "food_id"
      })
    }
  }
  order_detail.init({
    order_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};