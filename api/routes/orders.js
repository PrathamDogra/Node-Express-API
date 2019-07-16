const express = require('express');
const router =express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json(
        {
            message:'Orders are being fetched'
        }
    )
})

router.post('/',(req,res,next)=>{
    res.status(200).json(
        {
            message:'Orders are being created'
        }
    )
})

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:`The Order ID is being fetched`,
        orderId:req.params.orderId
    })
})



module.exports=router