var model = require('../models/page.model').PageModel,
https = require("https");
var ConfigurationHelper = require('../helpers/configuration.helper').ConfigurationHelper;

var PageController = {

	ping : function(req, res){
		model.ping(function(req, result){
			res.send(result);
		});
	}
};

module.exports.PageController = PageController;

