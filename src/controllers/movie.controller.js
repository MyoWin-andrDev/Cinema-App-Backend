const { getNowPlaying } = require('../services/tmdb.service');
const { saveMovies } = require('../services/movie.service');
const MovieModel = require('../models/movie.model');
const {formatMessage} = require("../utils/utils");

let syncNowPlaying = async (req, res, next) => {
    const movies = await getNowPlaying();
    const firstFiveMovies = movies.slice(0, 5);

    const saved = [];

    for (const movie of firstFiveMovies) {
        const savedMovie = await saveMovies(movie);
        saved.push(savedMovie);
    }
    formatMessage(res, "Now Playing Movies Synced", saved);
};

module.exports = {
    syncNowPlaying
}


