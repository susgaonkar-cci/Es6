'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    contact: DataTypes.DOUBLE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};