

const express = require('express') ;
const router = express() ;

// Models 

const Director = require('../models/Director') ;


router.get('/',(req,res)=>{

    // Normal Yapı 
  //   Movie.find({},(err,data)=>{
  //     res.json(data) ;
  // }) ;
  
  const promise = Director.find({ });
    promise.then((data)=>{
      res.json(data); 
    
    }).catch((err)=>{
      res.json(err);
    });
  });

router.post('/',(req,res,next)=>{
    //const {name,surname,bio} = req.body ;
    const director = new Director(req.body) ;
    const promise = director.save();
    promise.then((data)=>{
        res.json({status:1});
    }).catch((err)=>{
        res.json(err) ;
    })
});

module.exports = router ;