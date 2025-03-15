const captainModel = require('../models/captain.model.js');




module.exports.createCaptain = async (
    {firstname, 
    lastname, 
    email, 
    password, 
    vehicle}) => {


        console.log({firstname,
            lastname, 
            email, 
            password, 
            vehicle,
            });

        // console.log(vehicle.color, vehicle.plate, vehicle.capacity, vehicle.vehicleType);
        
        
        if(!firstname || !email || !password || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType){
            throw new Error('All fields are required');
        }

        const captain = captainModel.create({
            fullname: {
                firstname,
                lastname: lastname ? lastname : null,
            },
            email,
            password,
            vehicle
        });

        return captain;

    }














