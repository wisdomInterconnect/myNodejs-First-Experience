//MONGODB PW: 1tmDzXaylpz3DTkY
//MONGODB CONNECTION: mongodb+srv://interconnect:<password>@cluster0.i52da.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
// const Thing = require('./models/thing');
// const Product = require('./models/product');

const app = express();
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://interconnect:1tmDzXaylpz3DTkY@cluster0.i52da.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('succcessfully connected to Mongodb Atlas');

    })
    .catch((error) => {
        console.log('Unable to connect to MongoBD Atlas');

        console.error(error);
    })
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/api/auth', userRoutes);


module.exports = app;