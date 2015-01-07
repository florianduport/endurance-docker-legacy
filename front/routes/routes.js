var PageController = require('./../controllers/page.controller').PageController;

/**
* Charge les routes 
* @class Routes
*/
var Routes = {
    /**
    * loadRoutes : Charge les routes dans Express pour les rendre accessible
    * @param app : l'application express
    * @param configuration : la configuration de l'application (contient le chemin de l'url)
    */
    loadRoutes : function(app, configuration){

		//routes / mapping controller
		
		app.get('/', PageController.ping);

    }

};

module.exports.Routes = Routes;