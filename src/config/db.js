require('dotenv').config();
console.log(process.env.DB_NAME);
const mongoose = require('mongoose');
const password = encodeURIComponent(process.env.PASSWORD);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_FRONT + password + process.env.MONGO_URL_END + process.env.DB_NAME);
        console.log('MongoDB connected');

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
