const cinemaController = require('../controllers/cinema.controller');
const router = require('express').Router();

router.post('/add', cinemaController.saveCinema);
router.get('/get', cinemaController.getCinema);

module.exports = router;