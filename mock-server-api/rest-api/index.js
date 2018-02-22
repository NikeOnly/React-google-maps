var router = require('express').Router(),
    pause = require('connect-pause'),
    placesController = require('./placesController');

router.get('/places-list', pause(1000), placesController.getOffers);

module.exports = router;
