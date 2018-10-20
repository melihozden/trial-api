
const mongoose = require('mongoose');


module.exports = () =>{
    mongoose.connect("mongodb://<username>:<password>c@ds233763.mlab.com:33763/movie-api",{useNewUrlParser:true})

mongoose.connection.on('open',()=>{
    console.log("Mongodb status : On")
}) ;

mongoose.connection.on('error',(err)=>{
    console.log("Mongodb status : ",err)
}) ;

mongoose.Promise = global.Promise ;


} ;





