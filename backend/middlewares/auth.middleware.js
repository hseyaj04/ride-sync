const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model.js'); // Ensure this is imported

module.exports.authUser = async (req, res, next) => {
    console.log(req.cookies?.token || req.headers?.authorization?.split(' ')[1]);
    
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    
    
    console.log(req.cookies?req.cookies:false);
    
    const isBlacklisted = await blacklistTokenModel
        .findOne({ token: token })
        .exec();

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { maxAge: '24h' });
        const user = await userModel.findById(decoded._id);

        req.user = user;
        console.log(user);
        
        return next();
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: "Unauthorized" });
    }
};