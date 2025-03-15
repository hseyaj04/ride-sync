const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db.js')
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


const userRoutes = require('./routes/user.routes.js')
const captainRoutes = require('./routes/captain.route.js')
connectToDb();


app.use(cookieParser())
app.use(cors());
app.use(express.json())


app.get('/', (req,res) => {
    res.send("Test");
})
app.use('/users', userRoutes);
app.use('/captains', captainRoutes)

module.exports = app;