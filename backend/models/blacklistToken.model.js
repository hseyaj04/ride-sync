const mongoose = require('mongoose');
const { create } = require('./user.model');



const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        exoires:  86400// 1 day
    }
})


const blacklistTokenModel = mongoose.model('BlacklistToken', blacklistTokenSchema)

module.exports = blacklistTokenModel;