const router = require('express').Router();
const timeslotController = require('../controllers/timeslot.controller');

router.get('/:cinemaId/movies/:movieId', timeslotController.getCinemaMovieTimeSlots)
router.get('/', timeslotController.getAllTimeSlot)
router.post('/delete', timeslotController.deleteAllTimeSlot)

module.exports = router;