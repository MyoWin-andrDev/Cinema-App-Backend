const router = require('express').Router();
const movieController = require('../controllers/movie.controller');

router.get('/sync', movieController.syncNowPlaying)
router.get('/:movieId/cinemas', movieController.getCinemasByMovie)

module.exports = router;