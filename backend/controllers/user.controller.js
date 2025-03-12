const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const {validationResult} = require('express-validator')
const ApiResponse = require('../utils/ApiResponse.js')
const ApiError = require('../utils/ApiError.js')



module.exports.registerUser = async (req, res, next) => {

    // console.log(req.body);
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    const {fullname, email, password} = req.body
    // console.log(password);
    
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
    const user = await userService.findUserByEmail(email);
    if(!user){
        throw new ApiError(400, "Invalid Email")
    }

    
    if(!(user.comparePassword(password))){
        throw new ApiError(400, "Invalid password")
    }

    const token = user.generateAuthToken();

    return res.status(201).json(
        new ApiResponse(
            200,
            "user created",
            {
                token: token,
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                socketId: user.socketId
            }
        )
    )


}