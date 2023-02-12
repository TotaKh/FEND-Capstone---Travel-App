// Setup empty JS object to act as endpoint for all routes

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


// POST routen
GeoData = {};

app.post('/GeoName', (req,res)=>{
  newData ={
    lng: req.body.lng,
    lat: req.body.lat,
    country: req.body.country,
    city: req.body.city,
  }
  GeoData = newData;
  res.send(GeoData).status(200);
})

WbitData ={};
app.post('/Wbit', (req,res)=>{
  newData ={
    temp: req.body.temp,
    description: req.body.description,
    icon: req.body.icon
  }
  WbitData = newData;
  res.send(WbitData).status(200);
})

imageData ={};
app.post('/pixabay', (req,res)=>{
  console.log(req.body)
  imageData = req.body;
  res.send(imageData).status(200);
})


// GET route


app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/GetTrip', (req,res)=> {
  projectData = {
    GeoData,
    WbitData,
    imageData
  }
  console.log(projectData);//
  res.send(projectData).status(200);
});
