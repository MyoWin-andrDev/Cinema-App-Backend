const cinemaModel = require('../models/cinema.model');
const { formatMessage } = require('../utils/utils');

let saveCinema = async (req, res) => {
    let result = await new cinemaModel(req.body).save()
    formatMessage(res, "Cinema SuccessFully Added", result)
}

let getCinema = async (req, res) => {
    let result = await cinemaModel.find();
    formatMessage(res, "Get All Cinema", result)
}

module.exports = {
    saveCinema,
    getCinema
};