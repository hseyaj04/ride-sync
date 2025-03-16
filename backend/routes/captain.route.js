const captainController = require('../controllers/captain.controller.js');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware.js');


router.post('/register', [
    body('fullname.firstname').isString().isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 character long'),
    body('vehicle.color').isString().isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isString().isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().isLength({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),

], captainController.registerCaptain)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 character long')
], captainController.loginCaptain)

router.post('/logout',authMiddleware.authCaptain, captainController.logoutCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);



module.exports = router;