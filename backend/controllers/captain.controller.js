const captainModel = require('../models/captain.model.js');
const captainService = require('../services/captain.service.js');
const {validationResult} = require('express-validator');





module.exports.registerCaptain = async (req, res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    } 
    // console.log(req.body);
    const {fullname, email, password, vehicle} = req.body

    // console.log(fullname, email, password, vehicle);
    
    const {firstname, lastname} = fullname
    // console.log(firstname, lastname);
    


    const isCaptainAlreadyPresent = await userModel.findOne({email})



    if(isCaptainAlreadyPresent){
        return res.status(400).json({message: 'Captain already exists'})
    }


    const hashedPassword = await captainModel.hashPassword(password)
    console.log({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        vehicle        
    });
    
    const captain = await captainService.createCaptain({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        vehicle        
    })
    console.log(captain);
    
    const token = captain.generateAuthToken();
    res.cookie('token', token)
    res.status(201).json({token, captain})
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    } 
    const {email, password} = req.body
    // console.log(email, password);
    
    const captain = await captainModel.findOne({email}).select('+password')
    console.log(captain);
    
    if(!captain){
        return res.status(400).json({message: 'Captain does not exist'})
    }
    const isPasswordValid = await captain.comparePassword(password)
    if(!isPasswordValid){
        return res.status(400).json({message: 'Invalid password'})
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token)
    res.status(200).json({token, captain})
}