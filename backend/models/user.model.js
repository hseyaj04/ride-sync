const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:  {
            type:String,
            required: true,
            minlength: [3, "First name must be atleast 3 characters long"]
        },
        lastname:  {
            type:String,
            minlength: [3, "Lastname must be atleast 3 characters long"]
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Enter a valid email"]
    },
    password:{
        type: String,
        required: true
    },
    socketId: {
        type: String
    }
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token
}


userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}


const userModel = mongoose.model('User', userSchema)

module.exports = userModel