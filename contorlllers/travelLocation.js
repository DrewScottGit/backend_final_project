const Location = require('../models/locationList');

const getAllLocations = async (req, res) => {
    let locations;
    try {
        locations = await Location.find();
    } catch (err) {
        console.log(err);
    } if(!locations) {
        return res.status(404).json({message: "No location found"});
    }

    return res.status(200).json({ locations });
}

const addLocations = async (req, res) => {
    let locations;
    const { name, country, description, image} = req.body;
    try {
        locations = new Location({
            name,
            country,
            description,
            image
        });
        await location.save();
    } catch (err) {
        console.log(err);
    } if (!Location) {
        // code 500 means something went wrong on our server
        return res.status(500).json({ message: "Not able to add"});
    }
    // code 201 means successful creation of resource
    return res.status(201).json({ locations })
}

const getById = async (req, res) => {
    let locations;
    const id = req.params.id;
    try {
        locations = await Location.findById(id);
    } catch (err) {
        console.log(err);
    } if (!Location) {
        return res.status(404).json({ message: "No location found"});
    }
    return res.status(200).json({ locations })
}

const updateLocations = async (req, res) => {
    let locations;
    const { name, country, description, image } = req.body;
    const id = req.params.id;
    try {
        locations = new Location({
            name,
            country,
            description,
            image
        });
        await locations.save()
    } catch (err) {
        console.log(err)
    } if (!locations){
        return res.status(404).json({ message: "Unable to Update by ID"});
    }
    return res.status(200).json({ locations });
}

const deleteLocation = async (req, res) => {
    let locations;
    const id = rew.params.id;
    try {
        locations = await Location.findByIdAndRemove(id);
    } catch(err) {
        console.log(err)
    } if(!locations) {
        return res.status(404).json({message: "Unable to delete by ID"});
    }
    return res.status(200).json({ message: 'Location successfully deleted'});
}

exports.getAllLocations = getAllLocations;
exports.addLocations = addLocations;
exports.getById = getById;
exports.updateLocations = updateLocations;
exports.deleteLocation = deleteLocation;