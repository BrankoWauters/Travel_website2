var Country = require('../models/country');
var City = require('../models/city');

var async = require('async');

exports.index = function (req, res) {
   res.render('index',{title: 'Shit website',error:err});
    
};

//DISPLAY list of all countries
exports.country_list = function(req,res,next){
    res.send('NOT implemented: List of all countries');
};
    

