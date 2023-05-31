//Load express

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// Create our express app

const app = express();
const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI

// Connect

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewURLParser: true},).then(()=>console.log('MongoDB connection established'));


// Error

db.on('error', err => console.log(err.message + ' is MongoDB running?'));
db.on('disconnected', ()=> console.log('MongoDB disconnected'));

//middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/users', userRoute);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port`);
});
