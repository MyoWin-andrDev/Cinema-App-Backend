const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String },
    prefer_genres: [{ type: String }],
    watchlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    }]
}, { timestamps: true });

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
