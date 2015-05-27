/**
 * Surcharge de la configuration en BDD
 * @class LocalConfig 
 */
var LocalConfig = {

	/**
	* Override attributes form db config here
	*/
	//obligatoire
	database : {
		address : "mongodb://user:pass@host:port/dbname"
	},
	addressBasePath : "http://localhost",
	hmacEnabled : false
	
};

module.exports.LocalConfig = LocalConfig;