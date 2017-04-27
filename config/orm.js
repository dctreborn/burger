var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
    	var query = "SELECT * FROM " + table;

        console.log(query);

    	connection.query(query, function(err, results){
    		if (err) throw err;

    		cb(results);
    	});
    },
    insertOne: function(table, cols, values, cb) {
    	//INSERT INTO tablename (variables) VALUES (values)
    	var query = "INSERT INTO ";
        query += table;
        query += " (" + cols.toString() + ") ";
        query += "VALUES";
        query += " (" + values.toString() + ") ";

        console.log(query);

        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results);
        });
    },
    updateOne: function() {
        //UPDATE tablename SET 
    	var query = ;

        console.log(query);
    }
};

module.exports = orm;