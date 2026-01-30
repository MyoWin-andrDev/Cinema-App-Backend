const router = require('express').Router();
const timeslotController = require('../controllers/timeslot.controller');

router.get('/:cinemaId/movies/:movieId', timeslotController.getCinemaMovieTimeSlots)

module.exports = router;