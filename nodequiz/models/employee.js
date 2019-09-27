const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  employeeId:{type:String, require:true},
  firstName:{type:String},
  lastName:{type:String},
  quizes:{type:Array}
});

module.exports=mongoose.model('Employee',employeeSchema)
