const user = require('../models').User;
import bcrypt from 'bcryptjs'

export function Login(req,res,next){
  res.status(200).json(req.user.toAuthJSON());
  return next();
}
export function create(req,res){
     user.findOne({where:{username:req.body.username}})
    .then(userdatas=>{
         if(userdatas){
              res.send("username already existing")

         }
         else{
              var salt = bcrypt.genSaltSync(10)
              var hashedPassword = bcrypt.hashSync(req.body.password, salt)
              user.create({ username:req.body.username,password:hashedPassword})
              .then(userdata=>{res.send(userdata);})
         }
    })      


}

export function display(req,res){
   
          user.findOne({ where:{id:req.user.id},attributes:['username']})
          .then(userdata=>{ res.send(userdata)})


}