const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller.js')

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("first name must contain atleast 3 characters"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 chars long")
], userController.registerUser)

module.exports = router