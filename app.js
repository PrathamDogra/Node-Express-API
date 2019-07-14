const express = require('express')


// the app executes the express like a function
const app = express();

const productRoutes = require('./api/routes/products');

//Below is a middleware
// app.use((req, res, next) =>{
//     res.status(200).json({
//         message:'The code works',
//     })
// })
// '/products' is a filter, only requests that begins with '/products' can go to the middleware productRoutes.
app.use('/products', productRoutes);

module.exports = app;