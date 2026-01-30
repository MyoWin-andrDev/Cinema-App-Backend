const TimeSlot = require('../models/timeSlot.model');
const Cinema = require('../models/cinema.model');
const { formatMessage } = require('../utils/utils');

const getCinemaMovieTimeSlots = async (req, res) => {
    const { cinemaId, movieId } = req.params;

    const cinema = await Cinema.findById(cinemaId);
    if (!cinema) throw new Error("Cinema not found");

    const slots = await TimeSlot.find({ movie: movieId })
        .populate({
            path: 'hall',
            match: { cinema: cinemaId }
        })
        .sort({ start_time: 1 });

    const validSlots = slots.filter(s => s.hall);

    formatMessage(res, "Cinema Movie TimeSlots", validSlots);
};

module.exports = {
    getCinemaMovieTimeSlots
};
