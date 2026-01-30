const express = require('express');

const app = express();
app.use(express.json());

//Router
const cinemaRouter = require('./src/routes/cinema.route');
const movieRouter = require('./src/routes/movie.route');
const timeslotRouter = require('./src/routes/timeslot.route');
const hallRouter = require('./src/routes/hall.route');

//Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swagger');

app.use('/cinema', cinemaRouter);
app.use('/movie', movieRouter);
app.use('/timeslot', timeslotRouter);
app.use('/hall', hallRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
