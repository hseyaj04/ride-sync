const { validationResult } = require('express-validator');
const rideService = require('../services/ride.service');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {pickup, destination, vehicleType} = req.body;
    const user = req.user._id;
    try {
        const ride = await rideService.createRide(user ,pickup, destination, vehicleType)
        return res.status(200).json(ride)
    } catch (error) {
        return res.status(400).json(error);
    }



}


module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new Error(errors)
    }

    const {pickup, destination} = req.query

    try {
        const fare = await rideService.getfare(pickup, destination)
        return res.status(200).json(fare)
    } catch (error) {
        return res.status(400).json(error)

    }
}