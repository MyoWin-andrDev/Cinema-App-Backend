const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    rating: { type: Number },
    status: {
        type: String,
        enum: ['now_showing', 'coming_soon', 'ended'],
        default: 'now_showing'
    }
}, { timestamps: true });

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel
