const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie',
        required: true
    },
    cinema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cinema',
        required: true
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    show_date: { type: Date, required: true },
    base_price: { type: Number, required: true }
}, { timestamps: true });

const timeSlotModel = mongoose.model('time_slot', timeSlotSchema);

module.exports = timeSlotModel;
