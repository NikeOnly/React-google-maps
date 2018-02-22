var placesInfoDao = require("./../dao/placesInfoDao");

var placesController = {
    getOffers: function (req, res, next) {
        res.json(placesInfoDao.getAll());
    }
};

module.exports = placesController;
