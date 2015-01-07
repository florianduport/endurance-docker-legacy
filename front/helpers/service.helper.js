var DatabaseHelper = require('./database.helper').DatabaseHelper,
ConfigurationHelper = require('./configuration.helper').ConfigurationHelper,
HmacHelper = require('./hmac.helper').HmacHelper,
LoggerHelper = require('./logger.helper').LoggerHelper,
Request = require('request');

/**
 * Permet d'accéder à la couche service
 * @class ServiceHelper
 */
var ServiceHelper = {

    /**
    * logError : log une erreur en base
    * @param serviceName : le service à appeler
    * @param method : la méthode  de service à appeler
    * @param options : les options de l'appel : data : paramètres envoyés
    * @param done : la méthode de callback
    */
     getService : function(serviceName, method, options, done){
          ConfigurationHelper.getConfig({application : "services", done : function(config){
          	if(config["routes"][serviceName] !== undefined && config["routes"][serviceName][method] !== undefined){
                    
                    if(config.hmacEnabled)
                         options.data.hmac = HmacHelper.getHmac();

                    Request({
                         uri : config.addressBasePath+":"+config.port+config["routes"][serviceName][method],
                         method : options.method !== undefined ? options.method : "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },
                         timeout : 15000,
                         json : options.data !== undefined ? options.data : {}
                    }, function(error, response, body){
                         if(!error)
                              done(body);
                         else {
                              LoggerHelper.logError("front", "error on service call", options.data !== undefined ? options.data : {});
                         } 
                    });
                    
          	}

          }});
     }

}

module.exports.ServiceHelper = ServiceHelper;