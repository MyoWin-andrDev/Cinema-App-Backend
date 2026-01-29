const router = require('express').Router();
const movieController = require('../controllers/movie.controller');

router.get('/', movieController.syncNowPlaying)

module.exports = router;