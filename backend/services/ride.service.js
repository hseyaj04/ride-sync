const rideModel = require('../models/ride.model')
const mapsService = require('../services/maps.service')
const crypto = require('crypto')

function getOTP(num){
    function generateOTP(num){
        const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
        return otp;
    }

    return generateOTP(num)
}


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error("Pickup and destination location required");
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination);

    // Extract distance in kilometers and time in minutes
    const distanceInKm = distanceTime.distance.value / 1000; // Convert meters to kilometers
    const timeInMinutes = distanceTime.duration.value / 60; // Convert seconds to minutes

    // Define base fares and per km/min rates for each vehicle type
    const fareRates = {
        auto: { baseFare: 20, perKm: 10, perMinute: 2 },
        motorcycle: { baseFare: 15, perKm: 8, perMinute: 1.5 },
        car: { baseFare: 50, perKm: 15, perMinute: 3 },
    };

    // Calculate fares for each vehicle type
    const fares = {
        auto: fareRates.auto.baseFare + (distanceInKm * fareRates.auto.perKm) + (timeInMinutes * fareRates.auto.perMinute),
        motorcycle: fareRates.motorcycle.baseFare + (distanceInKm * fareRates.motorcycle.perKm) + (timeInMinutes * fareRates.motorcycle.perMinute),
        car: fareRates.car.baseFare + (distanceInKm * fareRates.car.perKm) + (timeInMinutes * fareRates.car.perMinute),
    };

    

    return {
        distance: distanceInKm.toFixed(2), // Distance in km
        time: timeInMinutes.toFixed(2), // Time in minutes
        fares: {
            auto: fares.auto.toFixed(2),
            motorcycle: fares.motorcycle.toFixed(2),
            car: fares.car.toFixed(2),
        },
    };
}


module.exports.getfare = getFare;


module.exports.createRide = async (
    user, 
    pickup, 
    destination, 
    vehicleType
) => {
    if(
        !user ||
        !pickup ||
        !destination ||
        !vehicleType
    ){
        throw new Error("All fields required")
    }


    const fare = await getFare(pickup, destination);
    console.log(fare.fares.motorcycle);
    console.log(fare.fares[vehicleType]);

    
    const otp = getOTP(6);
    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        fare: fare.fares[vehicleType],
        otp
    })
    console.log(ride);
    

    return ride;
}