//Load express

const express = require('express');
const travelLocation =require('./contorlllers/travelLocation');
const mongoose = require('mongoose');
const cors = require('cors');
const Locations = require('./models/locationList');
const travelData = require('./utilites/data');
require('dotenv').config();


// Create our express app

const app = express();

const mongoURI = process.env.MONGO_URI

// Connect

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Error

mongoose.connection.on('error', (error) => {
  console.error("MongoDB connection error:", error);
});


//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/locations', travelLocation);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port`);
});
