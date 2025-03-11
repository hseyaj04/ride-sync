const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const connectToDb = require('./db/db.js')
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes.js')


connectToDb();



app.use(cors());



app.get('/', (req,res) => {
    res.send("Test");
})
app.use('/users', userRoutes);


module.exports = app;