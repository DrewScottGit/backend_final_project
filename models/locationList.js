const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
    city:{
        type:String,
        required: true,
    },
    country:{
        type:String,
        required: true
    },
    descrition:{
        type:String,
        required: true
    },
    image:{
        type:String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const LocationSchema = mongoose.model('LocationList', locationSchema);

module.exports = LocationSchema