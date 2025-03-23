const express = require('express')

const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { body } = require('express-validator');
const rideController = require('../controllers/ride.controller')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage("Invalid Pickup Location"),
    body('destination').isString().isLength({min:3}).withMessage("Invalid destination Location"),
    rideController.createRide
)

module.exports = router