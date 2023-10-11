const todo = require("../models/todo.model");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const data = await todo.find({}, { __v: 0});
      res.send(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  setTodos: async (req, res) => {
    //inserting data in database
    const p1 = new todo({
      name: req.body.name,
      task: req.body.task,
      taskCompleted: req.body.taskCompleted,
    });

    //saving data in database using async await..
    const result = await p1.save();
    res.send(result);
  },


  deleteTodos:async(req,res)=>{
    try {
      const data=await todo.deleteOne({_id:req.params.id});
      res.send(data);
    } catch (error) {
      res.send(error)
    }

  },

  updateStatus:async(req,res)=>{
      try {
        const data=await todo.updateOne({_id:req.params.id},{$set:{taskCompleted:req.body.taskCompleted}})
      } catch (error) {
        res.send(error)
      }
  }
};
