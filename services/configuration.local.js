/**
 * Surcharge de la configuration en BDD
 * @class LocalConfig 
 */
var LocalConfig = {

	/**
	* Override attributes form db config here
	*/
	//pbligatoire
	database : {
		address : "yourdbaddresshere"
	},
	addressBasePath : "http://localhost",
	hmacEnabled : false
	
};

module.exports.LocalConfig = LocalConfig;