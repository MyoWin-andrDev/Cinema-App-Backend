const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    tmdbId : {type : Number},
    title: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    rating: { type: Number },
    overview : {type : String, required: true },
    posterPath : {type : String, required: true },
    backdropPath : {type : String, required: true },
    teaser : {type : Array},
    images : {type : Array},
    genres : {type : Array},
    casters : {type : Array},
}, { timestamps: true });

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel
