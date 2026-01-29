const express = require('express');

const app = express();
app.use(express.json());

//Router
const cinemaRouter = require('./src/routes/cinema.route');
const movieRouter = require('./src/routes/movie.route');

app.use('/cinema', cinemaRouter);
app.use('/movie', movieRouter);

module.exports = app;
