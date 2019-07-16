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
    const order={
        productId:req.body.productId,
        quantity:req.body.quantity
    }
    res.status(200).json(
        {
            message:'Orders are being created',
            order:order
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