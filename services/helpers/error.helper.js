LoggerHelper = require('./logger.helper').LoggerHelper;

/**
 * Gestion des pages d'erreur
 * @class ErrorHelper
 */
var ErrorHelper = {

	/**
    * loadRoutes : Charge les routes dans Express pour les rendre accessible
    * @param app : l'application express
    * @param configuration : la configuration de l'application (contient le chemin de l'url)
    */
	loadRoutes : function(app, configuration){

		// Handle 404
        app.use(function(req, res) {
        	LoggerHelper.logError("services", "Error 404 : NOT FOUND", { url : req.url, date: new Date() });
            res.send(false, 404);
        });

        // Handle 500
        /*app.use(function(error, req, res, next) {

        	LoggerHelper.logError("services", "Error 500 : INTERNAL ERROR", { url : req.url, date: new Date() }, error);
            if(configuration.isDebug)
                res.send(error, 500);
            else
                res.send(false, 500);
        });
*/
	}

};

module.exports.ErrorHelper = ErrorHelper;