var Book = require('../models/country');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');
exports.index = function (req, res) {
}, function (err, results) {
        res.render('index', { title: 'Vacations all planned for you', error: err, data: results });
    });
};
