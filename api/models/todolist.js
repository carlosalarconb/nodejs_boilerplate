'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var task = new Schema({
  id:{
    type:String
  },
  name:{
    type:String
  }
});

module.exports = mongoose.model("task",task);
