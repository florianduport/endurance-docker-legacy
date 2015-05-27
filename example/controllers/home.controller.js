var model = require('../models/home.model').models;

var HomeController = {

	Index : function(req, res){
		HomeController.View(model);
	},
	Test : function(req, res){
		HomeController.View(model);
	}

};

module.exports.controllers = HomeController;

