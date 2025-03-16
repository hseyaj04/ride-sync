const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const {validationResult} = require('express-validator')
const ApiResponse = require('../utils/ApiResponse.js')
const ApiError = require('../utils/ApiError.js')
const blacklistTokenModel = require('../models/blacklistToken.model.js')
const jwt = require('jsonwebtoken')

module.exports.registerUser = async (req, res, next) => {

    // console.log(req.body);
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    const {fullname, email, password} = req.body
    // console.log(password);
    const isUserAlreadyPresent = await userModel
        .findOne({email})

    if(isUserAlreadyPresent){
        res.status(400).json({message: 'User already exists'})
    }

    const hashedPassword = await userModel.hashPassword(password)
    // console.log(hashedPassword);
    

    // console.log(req.body);
    const {firstname, lastname} = fullname

    const user = await userService.createUser({
        firstname, lastname, email, password: hashedPassword
    })
    const token = user.generateAuthToken();
    const userResponse = {
        token: token,
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        socketId: user.socketId
    }    
    return res.status(201).json(
        new ApiResponse(
            200,
            "user created",
            userResponse
        )
    )
}


module.exports.userLogin = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    console.log(email + " logged in successfully");
    
    res.cookie('token', token);
    res.status(200).json({ token, user });


}

module.exports.getUserProfile = async (req, res) => {
    // console.log(req.user.fullname + " user profile fetched successfully");
    
    return res.status(200).json(new ApiResponse(200, "user profile", req.user))

}

module.exports.userLogout = async(req, res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    console.log(token);
    
    await blacklistTokenModel.create({ token });
    return res.status(200).json(new ApiResponse(200, "user logged out successfully", null))
}