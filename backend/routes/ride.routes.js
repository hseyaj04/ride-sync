const express = require('express')

const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage("Invalid Pickup Location"),
    body('destination').isString().isLength({min:3}).withMessage("Invalid destination Location"),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage("Invalid Pickup Location"),
    query('destination').isString().isLength({min:3}).withMessage("Invalid destination Location"),
    rideController.getFare
)

module.exports = router