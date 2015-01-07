var DatabaseHelper = require('../../helpers/database.helper').DatabaseHelper,
ObjectID = require('mongodb').ObjectID

/**
 * Service Category
 * @class CategoryService
 */
var ExampleService = {


    ping : function(done){
        done(true);
    }
};

module.exports.ExampleService = ExampleService;
