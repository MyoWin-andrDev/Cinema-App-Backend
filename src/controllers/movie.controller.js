const { getNowPlaying } = require('../services/tmdb.service');
const { saveMovies } = require('../services/movie.service');
const { generateTimeSlots } = require('../services/timeslot.service');
const { formatMessage } = require("../utils/utils");
const TimeSlot = require("../models/timeSlot.model");

const syncNowPlaying = async (req, res) => {
    const movies = await getNowPlaying();
    const firstFiveMovies = movies.slice(0, 5);

    const savedMovies = [];

    for (const movie of firstFiveMovies) {
        const savedMovie = await saveMovies(movie);
        savedMovies.push(savedMovie);
    }

    // Generate timeslots
    await generateTimeSlots(savedMovies);

    formatMessage(res, "Movies & TimeSlots synced", savedMovies);
};

const getCinemasByMovie = async (req, res) => {
    const { movieId } = req.params;

    const slots = await TimeSlot.find({ movie: movieId })
        .populate({
            path: 'hall',
            populate: { path: 'cinema' }
        });

    const cinemaMap = new Map();

    slots.forEach(slot => {
        const cinema = slot.hall.cinema;
        cinemaMap.set(cinema._id.toString(), cinema);
    });

    formatMessage(res, "Cinemas Showing Movie", [...cinemaMap.values()]);
};

module.exports = {
    syncNowPlaying,
    getCinemasByMovie
};
