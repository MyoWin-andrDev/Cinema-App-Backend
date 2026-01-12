const express = require('express');

const app = express();
app.use(express.json());

//Router
const cinemaRouter = require('./src/routes/cinema.route');

app.use('/cinema', cinemaRouter);

module.exports = app;
