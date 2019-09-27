const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee=require('../models/employee')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = 3000;

/************************* Mongoose connection strings go below this line  ***************/
const connString='mongodb+srv://user:newPassword!6@cluster0-yv2fv.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));
/************************* API routes go below this line ********************/






/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});

/**adding a new employee */
app.post('/api/employees',function(req,res,next){
  const employee={
    employeeId:req.body.employeeId,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    quizes:req.body.quizes
  }
Employee.create(employee,function(err,employees){
  if(err){
    console.log(err);
    return next(err);
  }else{
    console.log(employees);
    res.json(employees);
  }
})
})
