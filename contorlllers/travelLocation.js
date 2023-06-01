const Locations = require('../models/locationList');
const router = express.Router();
const express = require('express');
const travelData = require('../utilites/data')

router.get('/', (req, res)=> {
    Locations.find({}, (err, foundLocation)=>{
        res.json(foundLocation)
    })
});

router.get('/seed', async (req, res)=>{
    await Locations.deleteMany({});
    await Locations.insertMany({travelData});
});

router.delete('/:id', (req, res)=>{
    Locations.findByIdAndRemove(req.params.id, (err, deletedLocation)=>{
        res.json(deletedLocation)
    })
});

router.put('/:id', (req, res)=>{
    Locations.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLocation)=>{
        res.json(updatedLocation)
    })
});

router.post('/', (req, res)=>{
    Locations.create(req.body, (err, createdLocation)=>{
        res.json(createdLocation)
    })
});

router.get('/:id', (req, res)=>{
    Locations.findById(req.params.id, (err, foundLocation)=>{
        res.json(createdLocation)
    })
});

module.exports = router