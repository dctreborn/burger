var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
    	var query = "SELECT * FROM " + table;

    	connection.query(query, function(err, results){
    		if (err) throw err;

    		cb(results);
    	});
    },
    insertOne: function(table, cols, values, cb) {
    	//INSERT INTO tablename (variables) VALUES (values)
    	var query = "INSERT INTO " + table + " cols";
    },
    updateOne: function() {
    	var query;
    }
};

module.exports = orm;