var express = require('express');
var router = express.Router();

// Require controller modules.
var country_controller = require('../controllers/coutryController');
var city_controller = require('../controllers/cityController');


/// COUNTRY ROUTES ///

// GET catalog home page.
router.get('/', country_controller.index);

// GET request for list of all Country items.
router.get('/countries', country_controller.country_list);
