var mockedPlacesList = require('./../mocked-data').placesList;

var placesInfoDao = {
    getAll: function () {
        return mockedPlacesList;
    }
};


module.exports = placesInfoDao;
