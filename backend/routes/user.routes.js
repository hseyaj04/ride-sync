const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')





router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("first name must contain at least 3 characters"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 chars long")
], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 chars long")
], userController.userLogin)



router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, userController.userLogout)
module.exports = router