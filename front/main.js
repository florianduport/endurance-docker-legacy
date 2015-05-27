var express = require('express'),
path = require('path'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
session = require('express-session'),
Routes = require('./routes/routes').Routes,
MongoStore = require('connect-mongo')(session),
ConfigurationHelper = require('./helpers/configuration.helper').ConfigurationHelper;

/**
 * Classe principale - Keep it simple in here
 * @class Main 
 */
var Main = {

    /**
    * start : lance l'application express
    */
    start : function(){
    	var app = express();

    	app.listen(55055, function(){
		    console.log('front started on ');      
		});

    	/*ConfigurationHelper.getConfig({application : 'front', done : function(configuration){

			// Ne pas toucher ce bloc
			var app = express();
			app.use(cookieParser());
    		app.use(session({
	   			cookie: { maxAge: new Date(Date.now() + 30*24*60*60*1000)},
				store: new MongoStore({
					url: configuration.database.address,
					clear_interval: 3600
				}, startContent),
				secret: 'front'
			}));

    		function startContent(){
				app.set('port', configuration.port);
				app.set('views', __dirname + '/views');
				app.set('view engine', 'jade');
				app.use(express.static(path.join(__dirname, 'public')));

				app.use(bodyParser());

				Routes.loadRoutes(app, configuration);

				//lancement du serveur
				app.listen(configuration.port, function(){
				    console.log('front started on '+(configuration.addressBasePath+":"+configuration.port));      
				});
			}

		}});*/

	}

};

Main.start();