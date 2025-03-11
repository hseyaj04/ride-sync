const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const {validationResult} = require('express-validator')




module.exports.registerUser = async (req, res) => {

    console.log(req.body);
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    const {firstname, lastname, email, password} = req.body

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname, lastname, email, password: hashedPassword
    })
    const token = user.generateAuthToken();

    return res.status(201).json({token, user})
}