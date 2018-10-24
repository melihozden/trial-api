
const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;


const MovieSchema = new Schema({
    director_id : Schema.Types.ObjectId,
    title : {
        type : String,
        required : [true,'{PATH} is required.'],
        maxlength : [15,'`{PATH}` area must have under {MAXLENGTH}'],
        minlength : [4,'`{PATH}` area must have over {MINLENGTH}'],
    },
    category : {
        type : String,
        maxlength : 30,
        minlength : 4
    },
    country : {
        type : String,
        maxlength : 30,
        minlength : 4
    },
    year : {
        type : Number,
        max:  (new Date()).getFullYear(),
        min:  1900
    },
    imdb_score : Number,
    date :{
        type: Date,
        default: Date.now

    }
});

module.exports = mongoose.model('movie',MovieSchema) ;













