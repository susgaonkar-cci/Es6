'use strict';
export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
   Task.belongsTo(models.User,{
     foreignkey:'userId'
   });
  };
  return Task;
};