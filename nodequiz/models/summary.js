const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let summarySchema = new Schema({
  employeeId:{type:String,require:true},
  quizId:{type:String},
  score:{type:String},

});

module.exports=mongoose.model('Summary',summarySchema)
