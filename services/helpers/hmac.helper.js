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
    _getHmac : function(){
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
    },
    
    /**
    * _getHmac contient l'algo de génération du hmac
    * @return le hmac généré
    */
    verifyRequest : function(req, res, next){
    	var hmac = "";
    	if(req.body !== undefined && req.body.hmac !== undefined)
    		hmac = req.body.hmac;
    	else if(req.params !== undefined && req.params.hmac !== undefined)
    		hmac = req.params.hmac;
    	else if(req.query !== undefined && req.query.hmac !== undefined)
    		hmac = req.query.hmac;

    	ConfigurationHelper.getConfig({application : 'services', attribute : "hmacEnabled", done : function(hmacEnabled){
    		if((hmac !== "" && hmac === HmacHelper._getHmac()) || (hmacEnabled !== null && hmacEnabled === false))
    			return next();
    		else {
    			res.send(404);
    		}
    	}
    	});
    	
    }
};

module.exports.HmacHelper = HmacHelper;