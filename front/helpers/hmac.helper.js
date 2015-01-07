var crypto = require('crypto'),
ConfigurationHelper = require('./configuration.helper').ConfigurationHelper;

/**
 * Sécurisation des appels services
 * @class HmacHelper
 */
var HmacHelper = {

    /**
    * _getHmac contient l'algo de génération du hmac
    * @return le hmac généré
    */
    getHmac : function(){
        var date = new Date(),
        text = 'front'+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+'front',
        key       = 'front',
        algorithm = 'sha1',
        hmac = "";
    
        //improve with a better conditionnal hmac 
        //store it in db and check it instead of recaculate here
    
        hmac = crypto.createHmac(algorithm, key);
        hmac.setEncoding('hex');
    	hmac.write(text);
    	hmac.end();
    	return hmac.read();
    }
};

module.exports.HmacHelper = HmacHelper;