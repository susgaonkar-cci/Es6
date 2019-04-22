const User = require('../models').User;
//import User from '../models/user'
export function create(req,res){
  User.create({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            contact:req.body.contact
    
          })
          .then(user => res.status(201).send(user))
          .catch(error => res.status(400).send(error));
}
