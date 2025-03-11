const mongoose = require('mongoose');

async function connectToDb(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`connected to DB: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        throw new error
    }
    
}

module.exports = connectToDb