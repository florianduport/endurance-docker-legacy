ServiceHelper = require('../helpers/service.helper').ServiceHelper;

var PageModel = {

	ping : function(req, callback){

		ServiceHelper.getService('exampleService', 'ping', {data: {}, method : "POST"}, function(result){
			callback(result);
		})
		
	},
};

module.exports.PageModel = PageModel;