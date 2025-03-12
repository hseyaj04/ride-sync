const userModel = require('../models/user.model.js')


module.exports.createUser = async({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password){
        console.error("All fields are reuired");
    }
    // console.log(password);
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    console.log(await user.password);
    
    return user
}

module.exports.findUserByEmail = async(email) => {
    const user = await userModel.findOne({email})
    console.log(user.passwords + "from service");
    
    return user
}