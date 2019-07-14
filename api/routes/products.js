const express =require('express');

const router =express.Router

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
    if(id==='specialID'){
         res.status(200).json({
            message:"You have targeted a specail Id",
            id:id
         })
    } else {
        req.status(200).json({
            message: "You have targeted an Id"
        })
    }
})

module.exports= router;