const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware.js');
const mapsController = require('../controllers/maps.controller.js')
const router = express.Router();


const {query} = require('express-validator')



router.get('/get-coordinates', 
    query('address').isString().isLength({min: 3}),
    authMiddleware.authUser, 
    mapsController.getCoordinates)


router.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapsController.getDistanceTime)




   router.get('/get-suggestions', 
    query('input').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapsController.getAutoCompleteSuggestions
   ) 
module.exports = router;