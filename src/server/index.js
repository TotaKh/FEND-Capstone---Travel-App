// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));
const port = 8081;

// Setup Server
const server = app.listen(port, listening);
function listening(){
  // console.log(server);
  console.log(`running on localhost:${port}`);
};


// GET route

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/all', sendData);

function sendData (req,res) {
  console.log(projectData);//
  res.send(projectData);
};

// POST routen
app.post('/add', addData);

function addData(req,res){
  newData = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  }
  projectData = newData;
  res.send(projectData);
  console.log(projectData);//

};