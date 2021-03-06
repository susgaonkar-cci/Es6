'use strict';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {JWT_SECRET} from '../constants/constants'
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Task,{
      foreignkey:'userId',
      as:'user_tasks'
    })
  };
  User.prototype.createToken=function(){
    return jwt.sign({id:this.id},JWT_SECRET)
  
  }
  User.prototype.validPassword = function (password) {   
    return bcrypt.compareSync(password, this.password);   
    
    };  
   User.prototype.toAuthJSON = function () {    
   return {    
       token: this.createToken(),
         }    
  };
  return User;
};