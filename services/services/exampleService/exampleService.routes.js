var Base = require('../base/base.routes').BaseRoutes,
ExampleService = require('./exampleService.service').ExampleService,
LoggerService = require('../logger/logger.service').LoggerService,
HmacHelper = require('./../../helpers/hmac.helper').HmacHelper;

/**
 * Routes du service d'exemple
 * @class ExampleServiceRoutes
 */
var ExampleServiceRoutes = {

    Base : Base,

    /**
    * loadRoutes : Charge les routes dans Express pour les rendre accessible
    * @param app : l'application express
    * @param configuration : la configuration de l'application (contient le chemin de l'url)
    */
    loadRoutes : function(app, configuration){

        // get Categorys list
    
        app.post(configuration.routes.exampleService.ping, HmacHelper.verifyRequest, function(req, res){

            //check parameters
            if( req.body === undefined || !req.body){
                LoggerService.logError("services", "Wrong ping parameters", {});
                Base.send(req, res, false);
            }
            else {
                ExampleService.ping(function(result){
                    Base.send(req, res, result);
                });
            }   
        });   
    	
    }
    
};

module.exports.ExampleServiceRoutes = ExampleServiceRoutes;