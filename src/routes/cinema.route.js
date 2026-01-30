const cinemaController = require('../controllers/cinema.controller');
const router = require('express').Router();

router.post('/add', cinemaController.createCinema);
router.get('/get', cinemaController.getCinemas);

module.exports = router;