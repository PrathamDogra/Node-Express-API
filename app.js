const express = require('express')
const mongoose =require('mongoose')
// the app executes the express like a function
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Connecting to our DataBase cloud
mongoose.connect(`mongodb+srv://Pratham:${process.env.MONGO_ATLAS_PW}@nodeapi-gx6ut.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })

//For logging the error
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// /products is a filter, only requests that begins with /products can go to the middleware productRoutes.
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;