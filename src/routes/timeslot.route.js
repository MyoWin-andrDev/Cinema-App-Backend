const router = require('express').Router();
const timeslotController = require('../controllers/timeslot.controller');

router.get('/sync', timeslotController.syncNowPlaying)
router.get('/', timeslotController.getNowPlayingTimeSlot)

module.exports = router;