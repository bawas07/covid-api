'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  country.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    code_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country',
  });
  country.associate = function(models) {
    country.hasOne(models['summary'], {foreignKey: 'country_id'})
  };
  return country;
};