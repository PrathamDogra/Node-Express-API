const express = require('express');

const router = express.Router

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message:"Handling GET requests to /products",

    });
});

router.post('/',(req, res, next) =>{
    res.status(200).json({
        message:"Handling POST requests to /products",

    });
});

router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    if(id==='specialId'){
       return  res.status(200).json({
            message:"You have targeted a specail Id",
            id:id
         })
    } else {
       return req.status(200).json({
            message: "You have targeted an Id"
        })
    }
});

router.patch('/:productId',(req, res, next)=>{

    res.status(200).json({
        message:"Updated product",
    })

});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:"Deleted the product",
    })
});

module.exports = router;