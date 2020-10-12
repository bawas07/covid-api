'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class summary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  summary.init({
    country_id: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    death: DataTypes.INTEGER,
    recovered: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    update_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'summary',
  });

  summary.associate = function(models) {
    summary.belongsTo(models['country'], {foreignKey: 'country_id'})
  };

  return summary;
};