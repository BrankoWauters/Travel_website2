var express = require('express');
var router = express.Router();

// Require controller modules.

var city_controller = require('../controllers/cityController');
var country_controller = require('../controllers/countryController');


/// COUNTRY ROUTES ///

// GET catalog home page.
router.get('/', country_controller.index);

// GET request for list of all Country items.
router.get('/countries', country_controller.country_list);

/// CITY ROUTES ///

// GET request for list of all City items.
router.get('/cities', city_controller.city_list);

module.exports = router;
