const userModel = require('../models/user.model.js')


module.exports.createUser = async({
    firstname, lastname, email, password
}) => {
    if(!fullname.firstname || !email || !password){
        throw new Error('All Fields required')
    }
    return await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
}