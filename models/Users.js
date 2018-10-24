const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const UserSchema = new Schema({
    username: {
        type : String ,
        required : true,
        unique : [true,'this {PATH} has been taken by another user']
    },
    password :{
        type: String,
        minlength : 5
    }
});

module.exports = mongoose.model('users',UserSchema) ;



