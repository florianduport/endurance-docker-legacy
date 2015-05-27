var TarsJS = require('tarsjs');
var RoutesConfig = require('./config/routes.config').RoutesConfig;


/**
 * Classe principale - Keep it simple in here
 * @class Main 
 */
var Main = {

    /**
    * start : lance l'application express
    */
    start : function(){
    	var app = TarsJS();

    	RoutesConfig.loadRoutes(app);
        
    	app.listen(55055, function(){
		    console.log('front started on '); 
		});
        
	}

};

Main.start();