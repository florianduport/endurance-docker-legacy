/**
* Charge les routes 
* @class Routes
*/
var RoutesConfig = {
    /**
    * loadRoutes : Charge les routes dans Express pour les rendre accessible
    * @param app : l'application express
    * @param configuration : la configuration de l'application (contient le chemin de l'url)
    */
    loadRoutes : function(app){

		//routes / mapping controller
        
        app.registerRoute({
            method : "GET",
            url : '/',
            controller : app.controllers.home, 
            action : app.controllers.home.Index
        });     
        app.registerRoute({
            method : "GET",
            url : '/test',
            controller : app.controllers.home, 
            action : app.controllers.home.Test
        });

    }

};

module.exports.RoutesConfig = RoutesConfig;