var DatabaseHelper = require('./database.helper').DatabaseHelper;

/**
 * Outil de log en base
 * @class LoggerHelper
 */
var LoggerHelper = {
    
    /**
    * logError : log une erreur en base
    * @param application : l'application concernée
    * @param message : le message d'erreur
    * @param params : les paramètres de l'appel
    * @param errorObject : l'erreur retournée
    */
    logError : function(application, message, params, errorObject){
        var log = {application : application, type : "error", message : message, params : params, errorObject : errorObject}
        DatabaseHelper.getDatabase(function(db){
            db.collection("Logs", function(err, logsCollection){
                if (err || !logsCollection)
                {
                    console.log("Error while logging : DB is probably down");
                }
                logsCollection.insert(log, { w: 0 });
            });
        });
    }

};

module.exports.LoggerHelper = LoggerHelper;