const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log(`Connected to ${dv.name} at ${db.host}:${db.port}`)
});