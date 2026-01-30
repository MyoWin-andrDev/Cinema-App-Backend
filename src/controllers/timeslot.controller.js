const { getNowPlaying } = require('../services/tmdb.service');
const { saveMovies } = require('../services/movie.service');
const { generateTimeSlots } = require('../services/timeslot.service');
const { removeExpiredSlots } = require('../services/timeslot.cleanup');
const Movie = require('../models/movie.model');
const { formatMessage } = require('../utils/utils');

const syncNowPlaying = async (req, res) => {
    const tmdbMovies = await getNowPlaying();
    const firstFive = tmdbMovies.slice(0, 5);

    const savedMovies = [];

    for (const movie of firstFive) {
        const saved = await saveMovies(movie);
        savedMovies.push(saved);
    }

    await removeExpiredSlots();
    await generateTimeSlots(savedMovies);

    formatMessage(res, 'Movies & TimeSlots synced', {
        movies: savedMovies.length,
        days: 7,
        slotsPerDay: 2
    });
};

module.exports = { syncNowPlaying };
