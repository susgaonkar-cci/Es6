import {Task as task} from '../models'
export function create(req,res){
    task.create({
        taskName:req.body.taskName,
        userId:req.body.userId
    })
    .then(taskcreated=>{
        res.status(200).send(taskcreated);
    })
    .catch(err => {
              res.status(401).send(err)
      })
}

export function display(req,res){
    task.findAll().then(taskdisplay=>{res.status(200).send(taskdisplay)})
}