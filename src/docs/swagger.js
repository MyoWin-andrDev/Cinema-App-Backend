const moviePaths = require('./paths/movie.path');
const cinemaPaths = require('./paths/cinema.path');
const hallPaths = require('./paths/hall.path');
const timeSlotPaths = require('./paths/timeslot.path');

const movieSchema = require('./schemas/movie.schema');
const cinemaSchema = require('./schemas/cinema.schema');
const hallSchema = require('./schemas/hall.schema');
const timeSlotSchema = require('./schemas/timeslot.schema');
const tags = require('./tags');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Cinema App API',
        version: '1.0.0',
    },
    servers: [
        { url: 'http://localhost:4000' , description : "Localhost Server"},
        { url: 'https://cinema-app-backend-5ex2.onrender.com' , description: "Production Server"}
    ],
    tags,
    paths: {
        ...moviePaths.paths,
        ...cinemaPaths.paths,
        ...hallPaths.paths,
        ...timeSlotPaths.paths,
    },
    components: {
        schemas: {
            ...movieSchema,
            ...cinemaSchema,
            ...hallSchema,
            ...timeSlotSchema,
        },
    },
};
