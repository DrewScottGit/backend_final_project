const express = require('express');
const router = express.Router();
const TravelContollers = require('../../contorlllers/travelLocation');

// Index route

router.get('/', TravelContollers.getAllLocations)

// Create Route

router.post('/', TravelContollers.addLocations);

// Show Route

router.get('/:id', TravelContollers.getById);

// Update Route

router.put('/:id', TravelContollers.updateLocations);

// Delete Route

router.delete('/:id', TravelContollers.deleteLocation);

module.exports = router