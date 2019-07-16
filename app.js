const express = require('express')
// the app executes the express like a function
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')
const morgan = require('morgan');
app.use(morgan('dev'));

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