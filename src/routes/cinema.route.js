const cinemaController = require('../controllers/cinema.controller');
const hallController = require('../controllers/hall.controller');
const router = require('express').Router();

router.post('/add', cinemaController.saveCinema);
router.get('/get', cinemaController.getCinema);
router.post('/hall', hallController.createHallInCinema);

module.exports = router;