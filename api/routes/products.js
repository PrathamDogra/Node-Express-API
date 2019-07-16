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

<<<<<<< HEAD
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
=======
router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    if(id==='specialID'){
       return  res.status(200).json({
            message:"You have targeted a specail Id",
            id:id
         })
    } else {
       return req.status(200).json({
            message: "You have targeted an Id"
        })
    }
})

router.patch('/:productId',(req, res, next)=>{

    res.status(200).json({
        message:'Updated product',
    })

})

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:'Deleted the product',
    })
>>>>>>> b6c630a0aef402fb4a8b604aa416eacbc1bd8cbb
})

module.exports= router;