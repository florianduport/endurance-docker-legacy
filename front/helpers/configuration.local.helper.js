/**
 * Configuration de l'application
 * @class ConfigurationHelper
 */
var ConfigurationLocalHelper = {

    /**
    * getLocalConfigFile
    * @params module id = chemin du ficheir appelant 
    * @return le chemin du fichier configuration.local.js
    */
    getLocalConfigFile : function(moduleId){
        if(moduleId.indexOf("front") > 0)
            return './../../front/configuration.local';
    }

};

module.exports.ConfigurationLocalHelper = ConfigurationLocalHelper;