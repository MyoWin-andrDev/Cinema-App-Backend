const router = require('express').Router();
const movieController = require('../controllers/movie.controller');

router.get('/sync', movieController.syncNowPlaying)
router.get('/', movieController.getMovieFormDB)

module.exports = router;