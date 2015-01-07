var loggerService = require('../logger/logger.service'),
ConfigurationHelper = require('./../../helpers/configuration.helper').ConfigurationHelper;
/**
 * Méthodes partagées entre toutes les classes Routes
 * @class BaseRoutes
 */
var BaseRoutes = {

	/**
	* send : retourne la valeur de la méthode de service
	* @param data : la donnée à afficher
	* @configuration : la configuration de l'application
	*/
	send : function(req, res, data){
		ConfigurationHelper.getConfig({application : 'services', attribute : "debugEnabled", done : function(debugEnabled){
			if(debugEnabled !== null && debugEnabled){
				console.log(req.url+" :");
				console.log(data);
			}
			if(typeof(data) === "object")
				res.json(data);
			else
				res.send(data);
		}});
	}

};

module.exports.BaseRoutes = BaseRoutes;