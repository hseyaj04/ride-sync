const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db.js')
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser');

connectToDb();


app.use(cookieParser())
app.use(cors());
app.use(express.json())


app.get('/', (req,res) => {
    res.send("Test");
})
app.use('/users', userRoutes);


module.exports = app;