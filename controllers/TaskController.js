const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const task = await TaskModel.find();
  res.send(task);
  //   res.send("halu");
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;
  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Sucessfully");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went worng" });
    });

  //   res.send("halu");
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TaskModel.findByIdAndUpdate(id,{ task })
    .then(() =>res.send("Updated Sucessfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went worng" });
    });

  //   res.send("halu");
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() =>res.send("Deleted Sucessfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went worng" });
    });

  //   res.send("halu");
};
