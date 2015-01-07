var MongoClient = require('mongodb').MongoClient;
ConfigurationLocalHelper = require('./configuration.local.helper').ConfigurationLocalHelper,
LocalConfig = require(ConfigurationLocalHelper.getLocalConfigFile(module.parent.parent.id)).LocalConfig,
DatabaseInstance = null;
/**
 * Connexion à la BDD
 * @class DatabaseHelper
 */
var DatabaseHelper = {

    getDatabase : function(ToExecute){
    	if(DatabaseInstance) {
    		ToExecute(DatabaseInstance);
    		return;
    	}
        MongoClient.connect(LocalConfig.database.address, function(err, db) {
            if(err)
            	console.log(err);
            DatabaseInstance = db;
            ToExecute(DatabaseInstance);
        });
    }

};


module.exports.DatabaseHelper = DatabaseHelper;