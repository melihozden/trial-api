const express = require('express');
const router = express.Router();


const Movie  = require('../models/Movie') ;

router.get('/',(req,res)=>{

  // Normal Yapı 
//   Movie.find({},(err,data)=>{
//     res.json(data) ;
// }) ;

const promise = Movie.find({ });
  promise.then((data)=>{
    res.json(data); 
  
  }).catch((err)=>{
    res.json(err);
  });
});

router.get('/:movie_id',(req,res)=>{

  const promise = Movie.findById(req.params.movie_id) ;
  promise.then((data)=>{
    res.json(data) ;
  }).catch((err)=>{
    res.json(err);
  });

// Normal yontem 
  //   Movie.findById(req.params.movie_id,(err,data)=>{
//     res.json(data);
// });
});

router.post('/', function(req, res, next) {
  const {title,imdb_score,category,country,year} = req.body ;

  const movie = new Movie(req.body);

  // movie.save((err,data)=>{
  //   if (err) res.json(err);
  //   res.json({status:1});
  // });

  const promise = movie.save() ;

  promise.then((data)=>{
    res.json({status:1});
  }).catch((err)=>{
    res.json(err);
  });

});

module.exports = router;
