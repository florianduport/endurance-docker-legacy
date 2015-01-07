var DatabaseHelper = require('./database.helper').DatabaseHelper,
ConfigurationLocalHelper = require('./configuration.local.helper').ConfigurationLocalHelper,
LocalConfig = require(ConfigurationLocalHelper.getLocalConfigFile(module.parent.parent.id)).LocalConfig,
LoggerHelper = require('./logger.helper').LoggerHelper;

/**
 * Configuration de l'application
 * @class ConfigurationHelper
 */
var ConfigurationHelper = {

    /**
    * getConfig
    * @params options.attribute = attribut de conf à retourner / options.done = méthode de retour
    * @return la conf BDD + surcharge locale
    */
    getConfig : function(options){
    
        DatabaseHelper.getDatabase(function(db){
            db.collection("Configurations", function(err, configurations){
                
                if (err || !configurations)
                {
                    LoggerHelper.logError("front", "Configuration collection couldn't be found", options, err);
                    return options.done(LocalConfig);
                }
                configurations.findOne({ application: options.application}, function(err, applicationConfig){
                    if (err || !applicationConfig)
                    {
                        LoggerHelper.logError("front", "Application configuration document couldn't be found", options, err);
                        return options.done(LocalConfig);
                    }
                    
                    var configuration = applicationConfig;
    
                    var recursiveObjectMerge = function(parent, object){
    
                        if(Object.prototype.toString.call(object) === '[object Array]') { 
                            if(Object.prototype.toString.call(parent) !== '[object Array]')
                                parent = [];
                            for (var i = 0; i < object.length; i++) { 
                                parent[i] = recursiveObjectMerge(parent[i], object[i]);
                            }
                        }
                        else if(typeof(object) === "object") {
                            if(typeof(parent) !== "object")
                                parent = {};
                            for(var property in object){
                                parent[property] = recursiveObjectMerge(parent[property], object[property]);
                            }
                        }
                        else {
                            parent = object;
                        }
    
                        return parent;
                    };
    
                    
                    var configurationToReturn = recursiveObjectMerge(applicationConfig, LocalConfig);
    
                    if(options.attribute !== undefined){
                        if(configurationToReturn[options.attribute] !== undefined)
                            return options.done(configurationToReturn[options.attribute]);
                        else
                            return options.done(null);
                    }
                    else
                        return options.done(configurationToReturn);
                    
                });
            });
        });
        
    }

};

module.exports.ConfigurationHelper = ConfigurationHelper;