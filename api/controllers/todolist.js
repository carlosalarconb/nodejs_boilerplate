'use strict';
var mongoose = require("mongoose");
var task = mongoose.model('task');

var controllers ={};

controllers.get_all = function(req, res){
  task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}

controllers.set_one = function(req, res){
  var my_task = new task(req.body);
  my_task.save(function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
}

controllers.get_one = function(req, res){
  task.find({id:req.params.id}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}

module.exports = controllers;
