const router = require('express').Router();
const timeslotController = require('../controllers/timeslot.controller');

router.get('/', timeslotController.syncNowPlaying)

module.exports = router;