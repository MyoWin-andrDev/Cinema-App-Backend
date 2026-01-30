const cinemaController = require('../controllers/cinema.controller');
const router = require('express').Router();

router.post('/add', cinemaController.getCinemas);
router.get('/get', cinemaController.createCinema);

module.exports = router;