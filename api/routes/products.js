const express = require('express');

const router =express.Router();

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

router.get('/:productId',(req, res, next) => {
  const id = req.params.produceId;
  if(id === 'special'){
      res.status(200).json({
          message:"This is a special ID of product",
          id:id,
      })
  }else{
      res.status(200).json({
          message:'You passed an ID'
      })
  }

})

router.patch('/:productId',(req, res, next)=>{
    res.status(200).json({})
})

module.exports= router;